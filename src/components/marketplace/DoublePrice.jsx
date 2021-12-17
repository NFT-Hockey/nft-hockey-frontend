import React from "react";
import {ReactComponent as NearLogo} from "../../assets/near-logo.svg";

export default function DoublePrice(props) {
    return <h4>${props.dollar} / <NearLogo height='15' /> {props.near}</h4>
}