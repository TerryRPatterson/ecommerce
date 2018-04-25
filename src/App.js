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

let store = createStore(reducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

let App = () =>  {
    return (
        <div>
            <SiteHeader cart={testData["cart"]}
                currentUser={testData["currentUser"]}/>
            <Router>
                <Provider store={store}>
                    <div>
                        <Route path="/(home)?" render={ (props) => {
                            return <CategoriesPage {...props}
                                categories={testData["categories"]}
                                products={testData["products"]}/>;
                        }}/>
                        <Route path="/products/:id" render={ (props) => {
                            let id = props["match"]["params"]["id"];
                            let selectedProduct = testData["products"].forEach(
                                ({id:Pid}) => {
                                    if (Pid.toString() === id) {
                                        return true;
                                    }
                                    else {
                                        return false;
                                    }
                                });
                            return(
                                <ProductPage {...props}
                                    product={selectedProduct}
                                    categories={testData["categories"]}
                                    products={testData["products"]}/>);
                        }
                        }/>
                        <Route path="/categories/:id"/>
                    </div>
                </Provider>
            </Router>
        </div>
    );
};


export default App;
