import React from "react";
import {Container, InputGroup, FormControl, Row, Col, Card, Button, Image} from "react-bootstrap";
import MarketplacePageSelector from "./MarketplacePageSelector";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearch} from "@fortawesome/free-solid-svg-icons";

export default function Packs() {
    return <>
    <MarketplacePageSelector selectedPage='packs' />
    <Container>
        <h1 className='text-center my-3'>Packs</h1>
        <InputGroup className="mb-5">
            <InputGroup.Text><FontAwesomeIcon icon={faSearch} /> </InputGroup.Text>
            <FormControl id="inlineFormInputGroup" placeholder="Search" />
        </InputGroup>
        <Row>
            <Col className='col-12 col-md-4 mb-3'>
                <Card>
                    <Card.Body>
                        <Row>
                            <Col className='text-center col-sm-12 col-md-auto'>
                                <Image rounded src='/img/player.jpg' alt='player' height='250px'/>
                            </Col>
                            <Col className='text-center col-auto mt-3'>
                                <Card.Title>Pack name</Card.Title>
                                <Card.Text className='text-start'>Pack info</Card.Text>
                                <Card.Text className='text-center'><b>$100 / 10 N</b></Card.Text>
                                <Button className='text-center' variant="dark">Buy a pack</Button>
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
            </Col>
            <Col className='col-12 col-md-4 mb-3'>
                <Card>
                    <Card.Body>
                        <Row>
                            <Col className='text-center col-sm-12 col-md-auto'>
                                <Image rounded src='/img/player.jpg' alt='player' height='250px'/>
                            </Col>
                            <Col className='text-center col-auto mt-3'>
                                <Card.Title>Pack name</Card.Title>
                                <Card.Text className='text-start'>Pack info</Card.Text>
                                <Card.Text className='text-center'><b>$100 / 10 N</b></Card.Text>
                                <Button className='text-center' variant="dark">Buy a pack</Button>
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
            </Col>
            <Col className='col-12 col-md-4 mb-3'>
                <Card>
                    <Card.Body>
                        <Row>
                            <Col className='text-center col-sm-12 col-md-auto'>
                                <Image rounded src='/img/player.jpg' alt='player' height='250px'/>
                            </Col>
                            <Col className='text-center col-auto mt-3'>
                                <Card.Title>Pack name</Card.Title>
                                <Card.Text className='text-start'>Pack info</Card.Text>
                                <Card.Text className='text-center'><b>$100 / 10 N</b></Card.Text>
                                <Button className='text-center' variant="dark">Buy a pack</Button>
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
            </Col>
            <Col className='col-12 col-md-4 mb-3'>
                <Card>
                    <Card.Body>
                        <Row>
                            <Col className='text-center col-sm-12 col-md-auto'>
                                <Image rounded src='/img/player.jpg' alt='player' height='250px'/>
                            </Col>
                            <Col className='text-center col-auto mt-3'>
                                <Card.Title>Pack name</Card.Title>
                                <Card.Text className='text-start'>Pack info</Card.Text>
                                <Card.Text className='text-center'><b>$100 / 10 N</b></Card.Text>
                                <Button className='text-center' variant="dark">Buy a pack</Button>
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
            </Col>
            <Col className='col-12 col-md-4 mb-3'>
                <Card>
                    <Card.Body>
                        <Row>
                            <Col className='text-center col-sm-12 col-md-auto'>
                                <Image rounded src='/img/player.jpg' alt='player' height='250px'/>
                            </Col>
                            <Col className='text-center col-auto mt-3'>
                                <Card.Title>Pack name</Card.Title>
                                <Card.Text className='text-start'>Pack info</Card.Text>
                                <Card.Text className='text-center'><b>$100 / 10 N</b></Card.Text>
                                <Button className='text-center' variant="dark">Buy a pack</Button>
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
            </Col>
            <Col className='col-12 col-md-4 mb-3'>
                <Card>
                    <Card.Body>
                        <Row>
                            <Col className='text-center col-sm-12 col-md-auto'>
                                <Image rounded src='/img/player.jpg' alt='player' height='250px'/>
                            </Col>
                            <Col className='text-center col-auto mt-3'>
                                <Card.Title>Pack name</Card.Title>
                                <Card.Text className='text-start'>Pack info</Card.Text>
                                <Card.Text className='text-center'><b>$100 / 10 N</b></Card.Text>
                                <Button className='text-center' variant="dark">Buy a pack</Button>
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    </Container>
    </>
}