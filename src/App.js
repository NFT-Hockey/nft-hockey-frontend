import React from 'react';
import Navigation from "./components/Navigation";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import * as ROUTES from './constants/routes';
import Marketplace from "./components/marketplace";
import styled from "styled-components";

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
          <Route exact path={ROUTES.ROOT} element={<Marketplace />} />
          <Route path={ROUTES.MARKETPLACE} element={<Marketplace />} />
        </Routes>
      </BrowserRouter>
    </AppStyled>
  );
}

export default App;
