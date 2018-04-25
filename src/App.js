import React from "react";
import "./App.css";
import SiteHeader from "./userHeader";
import testData from "./testData";
import {HashRouter as Router, Route } from "react-router-dom";
import {Provider} from "react-redux";
import {createStore} from "redux";
import ProductPage from "./productPage";
import CategoriesPage from "./categoriesPage";
import reducer from "./reducer";
import CategoryDisplay from "./categoryDisplay";

let store = createStore(reducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

let App = () =>  {
    return (
        <div>
            <SiteHeader cart={testData["cart"]}
                currentUser={testData["currentUser"]}/>
            <Router>
                <Provider store={store}>
                    <div>
                        <Route exact path="/(home)?" component={CategoriesPage}/>
                        <Route path="/products/:id" component={ProductPage}/>
                        <Route path="/categories/:id"
                            component={CategoryDisplay}/>
                    </div>
                </Provider>
            </Router>
        </div>
    );
};


export default App;
