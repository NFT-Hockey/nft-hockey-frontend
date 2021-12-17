import React from "react";
import {Col, Container, Row, Button} from "react-bootstrap";
import DoublePrice from "./DoublePrice";
import BackButton from "./BackButton";

export default function BuyPack() {
    return <Container className='mt-3'>
        <Row className='justify-content-end mb-2'>
            <Col className='col-auto'>
                <BackButton />
            </Col>
        </Row>
        <Row>
            <Col className='col-12 col-sm-12 col-lg-5 text-center'>
                <img src='/img/player.jpg' alt='pack' width='300px'/>
            </Col>
            <Col className='col-12 col-sm-12 col-lg-7'>
                <h1>Good set of bad cards</h1>
                <p>ggood set of bad cards good set of bad cards good segood set of bad cards ood set of bad cards </p>
                <DoublePrice dollar={14} near={1} />
                <Button variant='dark' className='rounded-pill mt-3 w-25'>Buy</Button>
            </Col>
        </Row>
    </Container>
}