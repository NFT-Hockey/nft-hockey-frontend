import React from "react";
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import BackButton from "./BackButton";

export default function SellPlayer() {
    return <Container className='mt-3'>
        <Row className='justify-content-end mb-2'>
            <Col className='col-auto'>
                <BackButton />
            </Col>
        </Row>
        <Row>
            <Col className='col-12 col-sm-12 col-lg-5 text-center'>
                <img src='/img/player.png' alt='Player' width='300px'/>
            </Col>
            <Col className='col-12 col-sm-12 col-lg-7'>
                <h1>Konstiantyn Ostapenko</h1>
                <h4>Player stats: 34/96</h4>
                <Row className='mt-5'>
                    <Col className='col-6 col-sm-4'>
                        <Form.Control type='number' placeholder='Enter sum in NEAR' />
                    </Col>
                    <Col className='col-6 col-sm-4 col-lg-3'>
                        <Button type='submit' variant='dark' className='rounded-pill w-50'>Sell</Button>
                    </Col>
                </Row>
            </Col>
        </Row>
    </Container>
}