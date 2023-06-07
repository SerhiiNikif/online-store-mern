import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Product from "./pages/Product";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Pay from "./pages/Pay";

const App = () => {
    return (
        <Router>
            <Switch>
                <Route path="/pay">
                    <Pay />
                </Route>
            </Switch>
        </Router>
    )
};

export default App;