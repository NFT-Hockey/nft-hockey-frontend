import React from 'react';
import Navigation from "./components/Navigation";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import * as ROUTES from './constants/routes';
import styled from "styled-components";
import BuyPacks from "./components/marketplace/BuyPacks";
import BuyPlayers from "./components/marketplace/BuyPlayers";
import SellPlayers from "./components/marketplace/SellPlayers";
import Login from "./components/auth/Login";

const AppStyled = styled.div`
  min-height: 100vh;
  
  // fix indent for bottom navbar
  padding-bottom: 55px;
`

function App() {
  return (
    <AppStyled>
      <BrowserRouter>
      <Navigation />
        <Routes>
          <Route exact path={ROUTES.ROOT} element={<Login />} />
            <Route path={ROUTES.MARKETPLACE} element={<BuyPlayers />} />
            <Route path={ROUTES.MARKETPLACE_BUY_PLAYERS} element={<BuyPlayers />} />
            <Route path={ROUTES.MARKETPLACE_BUY_PACKS} element={<BuyPacks />} />
            <Route path={ROUTES.MARKETPLACE_SELL_PLAYERS} element={<SellPlayers />} />
        </Routes>
      </BrowserRouter>
    </AppStyled>
  );
}

export default App;
