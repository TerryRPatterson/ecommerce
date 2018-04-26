
import "./App.css";
import testData from "./testData";
import {createStore} from "redux";
/*eslint-disable no-unused-vars*/
//They are used in jsx
import ProductPage from "./productPage";
import CategoriesPage from "./categoriesPage";
import reducer from "./reducer";
import CategoryDisplay from "./categoryDisplay";
import React from "react";
import SiteHeader from "./userHeader";
import {HashRouter as Router, Route } from "react-router-dom";
import {Provider} from "react-redux";
/*eslint-enable no-unused-vars*/

let store = createStore(reducer,window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__());

let App = () =>  {
    return (
        <Router>
            <Provider store={store}>
                <div>
                    <SiteHeader cart={testData["cart"]}
                        currentUser={testData["currentUser"]}/>
                    <Route exact path="/(home)?" component={CategoriesPage}/>
                    <Route path="/products/:id" component={ProductPage}/>
                    <Route path="/categories/:id"
                        component={CategoryDisplay}/>
                </div>
            </Provider>
        </Router>
    );
};


export default App;
