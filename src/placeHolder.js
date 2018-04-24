import React from "react";

let placeholder = ({text}) => {
    return (
        <svg width="130" height="60">
            <g>
                <title>Layer 1</title>
                <text xmlSpace="preserve" text-anchor="middle"
                    font-family="Fantasy" font-size="24" id="svg_1" x="100"
                    y="30">Place Holder {text}</text>
            </g>
        </svg>
    );
};

export default placeholder;
