import React from "react";
import {Container, Row, Col, Image} from "react-bootstrap";
import {ReactComponent as NearLogo} from "../../assets/near-logo.svg";

export default function Score() {
    return <Container>
        <h1 className="text-center my-4">Opponent found</h1>
        <h1 className="text-center display-1"><b>0:0</b></h1>
        <Row>
            <Col className='col-5 text-end'>
                <Image src='/img/yg-logo.png' rounded className='w-50'/>
            </Col>
            <Col className='col-2 text-center'>
                <h1 className="display-1"><b>:</b></h1>
            </Col>
            <Col className='col-5 text-start'>
                <Image src='/img/near-logo.png' rounded className='w-50'/>
            </Col>
        </Row>
        <h3 className="text-center my-4">For win you will receive <NearLogo height='30' /> <b>0.5</b></h3>
    </Container>
}