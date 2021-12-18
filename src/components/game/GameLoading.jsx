import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHockeyPuck} from "@fortawesome/free-solid-svg-icons";
import {useNavigate} from "react-router-dom";
import {SCORE} from "../../constants/routes";

export default function GameLoading() {
    const navigate = useNavigate();

    return <div className={'d-flex justify-content-center mt-5'}>
        <FontAwesomeIcon icon={faHockeyPuck} size='6x' spin onClick={()=>navigate(SCORE)} />
    </div>
}