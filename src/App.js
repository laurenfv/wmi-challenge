import React from "react";
import { createGlobalStyle } from 'styled-components';
import { Box } from '@rebass/grid';
import Landing from "./pages";
import Nav from "./components";

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-family: 'Padauk', sans-serif;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    background-color: #f9f9f9;
    padding: 0;
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
