import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import 'typeface-poppins';

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Poppins', sans-serif;
  }
`;

const Home = () => (
  <div>
    <GlobalStyles />
    <h1>Hello World!</h1>
  </div>
);

export default Home;
