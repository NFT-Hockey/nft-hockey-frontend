import React from "react";
import {Button, Card, Col, Container, FormControl, Image, InputGroup, Row} from "react-bootstrap";
import MarketplacePageSelector from "./MarketplacePageSelector";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearch} from "@fortawesome/free-solid-svg-icons";
import {ReactComponent as NearLogo} from "../../assets/near-logo.svg";

export default function BuyPlayers() {
    return <>
        <MarketplacePageSelector selectedPage='buy-players' />
    <Container>
        <Row>
            <Col className='col-12 col-lg-4'>
                <h1 className='text-center my-3'>Buy a player</h1>
            </Col>
            <Col className='pt-4'>
                <InputGroup className="mb-5 align-self-center">
                    <InputGroup.Text><FontAwesomeIcon icon={faSearch} /> </InputGroup.Text>
                    <FormControl id="inlineFormInputGroup" placeholder="Search" />
                </InputGroup>
            </Col>
        </Row>
        <Row>
            <Col className='col-12 col-md-6 mb-3'>
                <Card>
                    <Card.Body>
                        <Row className='w-100 m-0'>
                            <Col className='text-center col-sm-12 col-md-auto'>
                                <Image rounded src='/img/player.jpg' alt='player' height='185px' width='153px'/>
                            </Col>
                            <Col className='text-center col-auto col-md-8 mt-3 p-0'>
                                <Row className='justify-content-between'>
                                    <Col className='col-auto'>
                                        <Card.Title>Kostiantyn Ostapenko</Card.Title>
                                    </Col>
                                    <Col className='col-auto'>
                                        <h4>$100 / <NearLogo height='15' /> 10</h4>
                                    </Col>
                                </Row>
                                <Card.Text className='text-start'>99/33</Card.Text>
                                <Button className='text-center rounded-pill' variant="dark">Buy a player</Button>
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    </Container>
    </>
}
