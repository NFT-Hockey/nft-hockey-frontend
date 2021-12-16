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
        onClick={()=>navigate(ROUTES.PACKS_MARKETPLACE)}
        variant={`dark${props.selectedPage === 'packs' ? '' : '-outline'}`}
        >Packs</BtnGroupBtn>
        <BtnGroupBtn
        onClick={()=>navigate(ROUTES.PLAYERS_MARKETPLACE)}
        variant={`dark${props.selectedPage === 'players' ? '' : '-outline'}`}
        >Players</BtnGroupBtn>
    </StyledBtnGroup>
}