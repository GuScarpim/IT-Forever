import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  input, button, textarea {
    font-family: 'Zilla Slab';
  }

  ::-webkit-scrollbar {
    width: 8px;
    height: 5px;
    background-color: #2e2e2e;
    -webkit-border-radius: 0px;
  }
  ::-webkit-scrollbar:hover {
    background-color: rgba(0, 0, 0, 0.09);
  }
  ::-webkit-scrollbar-thumb:vertical {
    -webkit-border-radius: 0px;
    height: 5px;
    background: #2e2e2e;
  }
  ::-webkit-scrollbar-thumb:vertical:active {
    -webkit-border-radius: 0px;
    background: #2e2e2e;
  }
  ::-webkit-scrollbar {
    width: 5px;
    background-color: #ccc;
  }
  ::-webkit-scrollbar:hover {
    background-color: #CCC;
  }
  ::-webkit-scrollbar-thumb:vertical {
    background: #2e2e2e;
  }
  ::-webkit-scrollbar-thumb:horizontal {
    background: #2e2e2e;
  }

  body {
    background: #815645;
    padding: 0px;
    margin: 0px;
  }
`

export default GlobalStyle;