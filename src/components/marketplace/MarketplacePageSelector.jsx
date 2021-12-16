import React from "react";
import * as ROUTES from '../../constants/routes';
import {ButtonGroup, Button} from "react-bootstrap";
import styled from "styled-components";
import {useNavigate} from "react-router-dom";

const StyledBtnGroup = styled(ButtonGroup)`
  width: 100%;
`

const BtnGroupBtn = styled(Button)`
  border-radius: 0;
`

export default function MarketplacePageSelector(props) {
    const navigate = useNavigate();

    return <StyledBtnGroup>
        <BtnGroupBtn
        onClick={()=>navigate(ROUTES.MARKETPLACE_BUY_PACKS)}
        variant={`dark${props.selectedPage === 'buy-packs' ? '' : '-outline'}`}
        >Buy packs</BtnGroupBtn>
        <BtnGroupBtn
        onClick={()=>navigate(ROUTES.MARKETPLACE_BUY_PLAYERS)}
        variant={`dark${props.selectedPage === 'buy-players' ? '' : '-outline'}`}
        >Buy players</BtnGroupBtn>
        <BtnGroupBtn
            onClick={()=>navigate(ROUTES.MARKETPLACE_SELL_PLAYERS)}
            variant={`dark${props.selectedPage === 'sell-players' ? '' : '-outline'}`}
        >Sell players</BtnGroupBtn>
    </StyledBtnGroup>
}