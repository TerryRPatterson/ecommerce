import React from "react";
/*Function that returns a cart svg with a dynacmic number of numberOfItems
Expectes an object containing numberOfItems */

let cart = ({numberOfItems}) => {
    return(
        <svg width="120" height="100">
            <metadata id="metadata7">image/svg+xml</metadata>
            <g>
                <path d="m110.8919,6l-8.10811,0l-21.62162,71.35135l-43.24325,0"
                    id="path2991" stroke-miterlimit="4" stroke-linejoin="round"
                    stroke-linecap="round" stroke-width="8" stroke="#000000"
                    fill="none"/>
                <path d={"m88.29456,87.18645a8.10811,8.10811 0 0 1 -16.21622,"+
                    "0a8.10811,8.10811 0 1 1 16.21622,0z"} id="path2995"
                stroke-miterlimit="4" stroke-width="4.054054" stroke="#000000"
                fill-rule="evenodd"/>
                <path d={"m40.96453,87.81926a8.10811,8.10811 0 0 1 -16.21622,"+
                    "0a8.10811,8.10811 0 1 1 16.21622,0z"} id="path2997"
                stroke-miterlimit="4" stroke-width="4.054054"
                stroke="#000000" fill-rule="evenodd" />
                <line fill="none" stroke="#000000" stroke-width="8"
                    stroke-linejoin="round" stroke-linecap="round" x1="87.529934"
                    y1="58.881533" x2="40.385403" y2="58.881533" id="svg_2"/>
                <line fill="none" stroke-width="8" stroke-linejoin="round"
                    stroke-linecap="round" x1="15.38931" y1="25.342468"
                    x2="41.967434" y2="57.299502" id="svg_3" stroke="#000000"
                    transform={"rotate(5.940036296844482 28.67837142944336,"+
                    "41.32098388671874) "}/>
                <text stroke="#000000"
                    transform={"matrix(3.4001467864316055,0,0,"+
                    "1.8126544359282235,-110.03865284219664,-8.62110567074534)"}
                    xmlSpace="preserve" text-anchor="middle"
                    font-family="Fantasy" font-size="24" id="svg_1"
                    y="31.239245" x="50.151818" stroke-width="0"
                    fill="#000000">{numberOfItems}</text>
            </g>
        </svg>
    );
};

export default cart;
