import React from "react";
import "./App.css";
//eslint-disable-next-line
import SiteHeader from "./userHeader";
import testData from "./testData";



let App = () =>  {
    return (
        <SiteHeader cart={testData["cart"]}
            currentUser={testData["currentUser"]}/>
    );
};


export default App;
