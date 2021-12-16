import React from "react";
import {Container} from "react-bootstrap";
import MarketplacePageSelector from "./MarketplacePageSelector";

export default function Players() {
    return <>
        <MarketplacePageSelector selectedPage='players' />
    <Container>
        <h1>Marketplace</h1>
    </Container>
    </>
}
