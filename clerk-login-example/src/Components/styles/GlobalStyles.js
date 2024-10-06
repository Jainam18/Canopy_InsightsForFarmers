import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: Arial, sans-serif;
  }

  h1 {
    text-align: center;
    color: #333;
  }

  .map-container {
    width: 100%;
    height: 600px;
    margin: 0 auto;
  }
`;

export default GlobalStyles;