/*eslint-disable no-unused-vars*/
//They are used in jsx
import React from "react";
/*eslint-enable no-unused-vars*/

let placeholder = ({text}) => {
    return (
        <svg width="130" height="60">
            <g>
                <title>Layer 1</title>
                <text xmlSpace="preserve" textAnchor="middle"
                    fontFamily="Fantasy" fontSize="24" id="svg_1" x="100"
                    y="30">Place Holder {text}</text>
            </g>
        </svg>
    );
};

export default placeholder;
