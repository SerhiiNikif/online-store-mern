import Product from "./pages/Product";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import { 
    BrowserRouter as Router, 
    Switch, 
    Route,
    Redirect
} from "react-router-dom";
import Success from "./pages/Success";
import { useSelector } from "react-redux";

const App = () => {
    const user = useSelector(state => state.user.currentUser);
    return (
        <Router>
            <Switch>
                {user ? (
                    <>
                        <Route exact path="/">
                            <Home />
                        </Route>
                        <Route path="/products/:category">
                            <ProductList />
                        </Route>
                        <Route path="/product/:id">
                            <Product />
                        </Route>
                        <Route path="/cart">
                            <Cart />
                        </Route>
                        <Route path="/success">
                            <Success />
                        </Route>
                        <Redirect from="/login" to="/" />
                        <Redirect from="/register" to="/" />
                    </>
                ) : (
                    <>
                        <Route path="/login">
                            <Login />
                        </Route>
                        <Route path="/register">
                            <Register />
                        </Route>
                        <Redirect to="/login" />
                    </>
                )}
            </Switch>
        </Router>
)}

export default App;