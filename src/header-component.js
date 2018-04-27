import "./header.css";
/*eslint-disable no-unused-vars*/
//They are used in jsx
import React from "react";
import LogIn from "./login-component";
/*eslint-enable no-unused-vars*/


let header = () => {
    return (
        <header className="siteHeader">

            <div>
                <a href="#/home"><img src="Icon.png" className="logo"
                    alt="Light Brown Guinea Pig.The site logo"/></a>
        Digital Crafts
            </div>
            <div className="subHeader">

                <LogIn/>
            </div>
        </header>
    );
};

export default header;
