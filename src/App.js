import React from "react";
import { createGlobalStyle } from 'styled-components';
import { Box } from '@rebass/grid';
import Landing from "./pages";
import Nav from "./components";

const GlobalStyle = createGlobalStyle`
  /* @font-face {
    font-family: 'DinBlack';
    src: local('./fonts/DINPro-Black.otf') format("opentype");
  } */
  html {
    font-family: sans-serif;
    box-sizing: border-box;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    background-color: #fff;
    padding: 0;
    margin: 0;
  }
  h1, h2, h3, h4, h5, h6 {
    margin: 0;
  }
`;

const App = () => {
  const renderApp = () => {
    return (
      <div>
        <Nav />
        <Landing />
      </div>
    );
  };

  return (
    <Box
      className='app'
      height='100%'>
      <GlobalStyle />
      {renderApp()}
    </Box>
  );
};

export default App;
