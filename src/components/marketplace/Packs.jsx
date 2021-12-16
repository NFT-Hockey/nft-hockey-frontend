import React from "react";
import {Container} from "react-bootstrap";
import MarketplacePageSelector from "./MarketplacePageSelector";

export default function Packs() {
    return <>
    <MarketplacePageSelector selectedPage='packs' />
    <Container>
        packs
    </Container>
    </>
}