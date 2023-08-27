const jwt = require("jsonwebtoken");
const ApiError = require('../exceptions/api-error.js');

const verifyToken = (req, res, next) => {
    const authHeader = req.headers.token;
    
    if (authHeader) {
        const token = authHeader.split(" ")[1];
        jwt.verify(token, process.env.JWT_SEC, (err, user) => {
            if (err) {
                throw ApiError.BadRequest('Token is not valid!');
            }
            req.user = user;
            next();
        })
    } else {
        return next(ApiError.UnauthorizedError());
    }
};

const verifyTokenAndAuthorization = (req, res, next) => {
    verifyToken(req, res, () => {
        if (req.user.id === req.params.id || req.user.isAdmin) {
            next();
        } else {
            throw ApiError.Forbidden();
        }
    })
};

const verifyTokenAndAdmin = (req, res, next) => {
    verifyToken(req, res, () => {
        if (req.user.isAdmin) {
            next();
        } else {
            throw ApiError.Forbidden();
        }
    });
};

module.exports = {
    verifyToken, 
    verifyTokenAndAuthorization,
    verifyTokenAndAdmin
}