import React from "react";
import {Button, Col, Container, Navbar, Row} from "react-bootstrap";
import {signInAsync} from "../../features/counter/counterSlice";
import {useDispatch} from "react-redux";
import {ReactComponent as NearLogo} from "../../assets/near-logo.svg";
import * as ROUTES from "../../constants/routes";
import {NavLink} from "react-router-dom";
import styled from "styled-components";

const StyledNavbar = styled(Navbar)`
  border-bottom: solid 1px #EBEBEB;
`

const NavbarBrandStyled = styled(Navbar.Brand)`
  font-size: 1.5rem;
`

export default function Login() {
    const dispatch = useDispatch();

    return <>
        <StyledNavbar className='navbar-expand-lg d-none d-md-block sticky-top' bg='dark' variant='dark'>
            <Container fluid className="justify-content-center">
                <Navbar.Brand href={ROUTES.ROOT}>
                    <img src='/img/nft-hockey-logo.png' alt='logo' width="60"/>
                </Navbar.Brand>
                <NavLink activeClassName='active' to={ROUTES.ROOT} className='nav-link'>
                    <NavbarBrandStyled><b>NFT HOCKEY</b></NavbarBrandStyled>
                </NavLink>
            </Container>
        </StyledNavbar>
        <Row className='justify-content-center mt-5'>
            <Col className='col-auto'>
                <Button variant='dark' size='lg' onClick={()=>dispatch(signInAsync())}><NearLogo height='25' fill='#ffffff' /> Sign in using NEAR</Button>
            </Col>
        </Row>
    </>
}
