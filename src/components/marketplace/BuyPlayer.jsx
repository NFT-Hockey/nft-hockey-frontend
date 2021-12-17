import React from "react";
import {Button, Col, Container, Row} from "react-bootstrap";
import BackButton from "./BackButton";
import DoublePrice from "./DoublePrice";

export default function BuyPlayer() {
    return <Container className='mt-3'>
        <Row className='justify-content-end mb-2'>
            <Col className='col-auto'>
                <BackButton />
            </Col>
        </Row>
        <Row>
            <Col className='col-12 col-sm-12 col-lg-5 text-center'>
                <img src='/img/player.jpg' alt='Player' width='300px'/>
            </Col>
            <Col className='col-12 col-sm-12 col-lg-7'>
                <h1>Konstiantyn Ostapenko</h1>
                <DoublePrice dollar={3000} near={300} />
                <p>Card seller: <a href="#">Volkov</a></p>
                <h4>Player stats: 34/96</h4>
                <Button variant='dark' className='rounded-pill mt-3 w-25'>Buy</Button>
            </Col>
        </Row>
    </Container>
}