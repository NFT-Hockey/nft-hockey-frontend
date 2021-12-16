import React from 'react';
import Navigation from "./components/Navigation";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import * as ROUTES from './constants/routes';
import styled from "styled-components";
import Packs from "./components/marketplace/Packs";
import Players from "./components/marketplace/Players";

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
          <Route exact path={ROUTES.ROOT} element={<Players />} />
            <Route path={ROUTES.MARKETPLACE} element={<Players />} />
            <Route path={ROUTES.PLAYERS_MARKETPLACE} element={<Players />} />
            <Route path={ROUTES.PACKS_MARKETPLACE} element={<Packs />} />
        </Routes>
      </BrowserRouter>
    </AppStyled>
  );
}

export default App;
