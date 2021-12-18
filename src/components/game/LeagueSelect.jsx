import React from "react";
import {Container, Row, Col, Card} from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import {LOADING} from "../../constants/routes";

export default function LeagueSelect() {
    const navigate = useNavigate();

    return <Container>
        <h1 className='text-center my-4'>Select league</h1>
        <Row>
            <Col className='col-12 col-sm-4 col-lg-4 mb-2'>
                <Card bg='dark' text='light' onClick={()=>navigate(LOADING)}>
                    <Card.Body className='text-center'>
                        <Card.Title>First league</Card.Title>
                        <Card.Text>Play against computer</Card.Text>
                        <Card.Text>earn coins</Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            <Col className='col-12 col-sm-4 col-lg-4 mb-2'>
                <Card bg='dark' text='light'>
                    <Card.Body className='text-center'>
                        <Card.Title>Super league</Card.Title>
                        <Card.Text>Play against other players</Card.Text>
                        <Card.Text>earn NEAR tokens</Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            <Col className='col-12 col-sm-4 col-lg-4 mb-2'>
                <Card bg='dark' text='light'>
                    <Card.Body className='text-center'>
                        <Card.Title>Friendly game</Card.Title>
                        <Card.Text>Play against other players</Card.Text>
                        <Card.Text>set your own bet</Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    </Container>
}
