
import "./App.css";
import {createStore} from "redux";
/*eslint-disable no-unused-vars*/
//They are used in jsx
import ProductPage from "./product-page-component";
import CategoriesPage from "./categories-page-component";
import reducer from "./reducer";
import CategoryDisplay from "./category-display-component";
import React from "react";
import SiteHeader from "./header-component";
import {HashRouter as Router, Route } from "react-router-dom";
import {Provider} from "react-redux";
import LoginPage from "./login-page-component";
/*eslint-enable no-unused-vars*/

let store = createStore(reducer,window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__());

let App = () =>  {
    return (
        <Router>
            <Provider store={store}>
                <div>
                    <SiteHeader/>
                    <Route exact path="/(home)?" component={CategoriesPage}/>
                    <Route path="/products/:id" component={ProductPage}/>
                    <Route path="/categories/:id"
                        component={CategoryDisplay}/>
                    <Route path="/login" component={LoginPage}/>
                </div>
            </Provider>
        </Router>
    );
};


export default App;
