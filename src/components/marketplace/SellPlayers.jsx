import React, {useEffect, useState} from "react";
import MarketplacePageSelector from "./MarketplacePageSelector";
import {Button, Card, Col, Container, FormControl, Image, InputGroup, Row} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearch} from "@fortawesome/free-solid-svg-icons";
import {useNavigate} from "react-router-dom";
import {connect, WalletConnection} from "near-api-js";
import {config} from "../../app/near";
import * as nearAPI from "near-api-js";

export default function SellPlayers() {
    const navigate = useNavigate();
    const [cardsResponse, setCardsResponse] = useState([]);

    useEffect(()=> {
        connect(config).then(near => {
            let wallet = new WalletConnection(near);

            const sellPlayersContract = new nearAPI.Contract(
                wallet.account(), // the account object that is connecting
                "nft_storage.uht-hockey.testnet",
                {
                    // name of contract you're connecting to
                    viewMethods: ["nft_tokens_for_owner"], // view methods do not change state but usually return a value
                    changeMethods: [], // change methods modify state
                    sender: wallet.account(), // account object to initialize and sign transactions.
                }
            )

            sellPlayersContract.nft_tokens_for_owner({"account_id": wallet.getAccountId(), "from_index": "0", "limit": 50}).then(response => {
                console.log(response);
                setCardsResponse(response);
            })
        })
    }, []);

    return <>
        <MarketplacePageSelector selectedPage='sell-players' />
        <Container>
            <Row>
                <Col className='col-12 col-lg-4'>
                    <h1 className='text-center my-3'>Sell a player</h1>
                </Col>
                <Col className='pt-4'>
                    <InputGroup className="mb-5 align-self-center">
                        <InputGroup.Text><FontAwesomeIcon icon={faSearch} /> </InputGroup.Text>
                        <FormControl id="inlineFormInputGroup" placeholder="Search" />
                    </InputGroup>
                </Col>
            </Row>
            <Row>
                {cardsResponse.map((card, index) => (
                    <Col className='col-12 col-md-6 mb-3' key={`playercard-${index}`}>
                        <Card>
                            <Card.Body>
                                <Row className='w-100 m-0'>
                                    <Col className='text-center col-sm-12 col-md-auto'>
                                        <Image rounded src={card.metadata.media} alt='player' height='185px' width='153px'/>
                                    </Col>
                                    <Col className='text-center col-auto col-md-8 mt-3 p-0'>
                                        <Row className='justify-content-between'>
                                            <Col className='col-auto'>
                                                <Card.Title>{card.metadata.title}</Card.Title>
                                            </Col>
                                        </Row>
                                        <Card.Text className='text-start'>
                                            {card.metadata.description.split(',').slice(2).join('/')}
                                        </Card.Text>
                                        <Button className='text-center rounded-pill' variant="dark"
                                                onClick={()=>navigate('/marketplace/sell-players/3')}
                                        >Sell a player</Button>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    </>
}