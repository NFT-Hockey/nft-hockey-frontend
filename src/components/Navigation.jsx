import React from "react";
import {Container, Navbar, Nav, NavItem} from "react-bootstrap";
import styled from "styled-components";
import * as ROUTES from './../constants/routes';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHockeyPuck, faBriefcase, faStore} from "@fortawesome/free-solid-svg-icons";
import {NavLink} from "react-router-dom";

const NavigationStyled = styled.div`
  .navbar {
    border-bottom: solid 1px #EBEBEB;
  }
  .bottom-tab-nav {
    border-top: solid 1px #dcdcdc;
  }
  .nav-link svg,
  .bottom-nav-link svg {
    color: #55575b;
  }
`

const NavbarBrandStyled = styled(Navbar.Brand)`
  font-size: 1.5rem;
`

const tabs = [
    {
        route: ROUTES.MARKETPLACE,
        icon: faStore,
    },
    {
        route: ROUTES.ROOT,
        icon: faHockeyPuck,
    },
    {
        route: ROUTES.MARKETPLACE,
        icon: faBriefcase,
    },
]

export default function Navigation() {
    return <NavigationStyled>
        <Navbar className='navbar-expand-lg navbar-light d-none d-md-block sticky-top'>
            <Container fluid className="justify-content-center">
                <NavLink to={ROUTES.ROOT} className='nav-link'>
                    <NavbarBrandStyled>NFT based fantasy hockey managers game</NavbarBrandStyled>
                </NavLink>
                <Nav className='ml-auto'>
                    <NavItem className="m-3">
                        <NavLink to={ROUTES.ROOT} className='nav-link'>
                            <FontAwesomeIcon icon={faHockeyPuck} size="2x" />
                        </NavLink>
                    </NavItem>
                    <NavItem className="m-3">
                        <NavLink to={ROUTES.MARKETPLACE} className='nav-link'>
                            <FontAwesomeIcon icon={faStore} size="2x" />
                        </NavLink>
                    </NavItem>
                    <NavItem className="m-3">
                        <NavLink to={ROUTES.MARKETPLACE} className='nav-link'>
                            <FontAwesomeIcon icon={faBriefcase} size="2x" />
                        </NavLink>
                    </NavItem>
                </Nav>
            </Container>
        </Navbar>
        <Navbar className='fixed-bottom navbar-light d-block d-md-none bottom-tab-nav'>
            <Nav className='w-100'>
                <div className='d-flex flex-row justify-content-around w-100'>
                    {
                        tabs.map((tab, index) =>
                            <NavItem key={`tab-${index}`}>
                                <NavLink to={tab.route} className='nav-link bottom-nav-link' activeClassName='active'>
                                    <FontAwesomeIcon icon={tab.icon} size='lg' />
                                </NavLink>
                            </NavItem>
                        )
                    }
                </div>
            </Nav>
        </Navbar>
    </NavigationStyled>
}