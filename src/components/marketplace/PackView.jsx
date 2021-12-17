import React from "react";
import {Button, Col, Container, Image, Row} from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import {MARKETPLACE_BUY_PACKS} from "../../constants/routes";

export default function PackView() {
    const navigate = useNavigate();

    return <Container>
        <Row className='mt-3 justify-content-start'>
            <Col className='col-12 col-sm-6 col-lg-4 mb-4 text-center'><Image src='/img/player.png' width='250px' /></Col>
            <Col className='col-12 col-sm-6 col-lg-4 mb-4 text-center'><Image src='/img/player.png' width='250px' /></Col>
            <Col className='col-12 col-sm-6 col-lg-4 mb-4 text-center'><Image src='/img/player.png' width='250px' /></Col>
            <Col className='col-12 col-sm-6 col-lg-4 mb-4 text-center'><Image src='/img/player.png' width='250px' /></Col>
            <Col className='col-12 col-sm-6 col-lg-4 mb-4 text-center'><Image src='/img/player.png' width='250px' /></Col>
        </Row>
        <Row className='justify-content-center my-4'>
            <Col className='col-auto'>
                <Button variant='dark' onClick={()=>navigate(MARKETPLACE_BUY_PACKS)}>OK</Button>
            </Col>
        </Row>
    </Container>
}
