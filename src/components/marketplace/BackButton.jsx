import React from "react";
import {useNavigate} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowLeft} from "@fortawesome/free-solid-svg-icons";
import {Button} from "react-bootstrap";

export default function BackButton() {
    const navigate = useNavigate();

    return <Button variant='outline-dark' className='rounded-pill' size='sm'
    onClick={()=>navigate(-1)}
    ><FontAwesomeIcon icon={faArrowLeft} /> back</Button>
}