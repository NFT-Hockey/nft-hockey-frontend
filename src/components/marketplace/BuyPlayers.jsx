import React, {useEffect} from "react";
import {Button, Card, Col, Container, FormControl, Image, InputGroup, Row} from "react-bootstrap";
import MarketplacePageSelector from "./MarketplacePageSelector";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearch} from "@fortawesome/free-solid-svg-icons";
import DoublePrice from "./DoublePrice";
import {useNavigate} from "react-router-dom";
import {connect, WalletConnection} from "near-api-js";
import {config} from "../../app/near";
import * as nearAPI from "near-api-js";

export default function BuyPlayers() {
    const navigate = useNavigate();

    useEffect(()=> {
        connect(config).then(near => {
            let wallet = new WalletConnection(near);

            const marketplaceContract = new nearAPI.Contract(
                wallet.account(), // the account object that is connecting
                "marketplace.uht-hockey.testnet",
                {
                    // name of contract you're connecting to
                    viewMethods: ["get_sales_by_nft_contract_id"], // view methods do not change state but usually return a value
                    changeMethods: [], // change methods modify state
                    sender: wallet.account(), // account object to initialize and sign transactions.
                }
            )

            marketplaceContract.get_sales_by_nft_contract_id({"nft_contract_id": "marketplace.uht-hockey.testnet"}).then(response => {
                console.log(response);
            })
        })
    })

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
                                <Image rounded src='/img/player.png' alt='player' height='185px' width='153px'/>
                            </Col>
                            <Col className='text-center col-auto col-md-8 mt-3 p-0'>
                                <Row className='justify-content-between'>
                                    <Col className='col-auto'>
                                        <Card.Title>Kostiantyn Ostapenko</Card.Title>
                                    </Col>
                                    <Col className='col-auto'>
                                        <DoublePrice dollar={100} near={10} />
                                    </Col>
                                </Row>
                                <Card.Text className='text-start'>99/33</Card.Text>
                                <Button className='text-center rounded-pill' variant="dark"
                                        onClick={()=>navigate('/marketplace/buy-players/3')}
                                >Buy a player</Button>
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    </Container>
    </>
}
