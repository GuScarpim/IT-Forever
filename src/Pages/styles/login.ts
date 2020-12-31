import styled from 'styled-components';

interface IProps {
  error?: boolean;
}


export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-items: center;
  padding: 0 40px 0 40px;

`

export const PositionSpinner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2px;
`

export const Header = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 0 40px 0;
  img { 
    width: 200px;
  }

`

export const Card = styled.div<IProps>`
  animation: show .5s cubic-bezier(.1,.82,.25,1);

  @keyframes show {
    0% {
      transform: scale(1.4);
      opacity: 0;
    }
    100% {
      transform: scale(1);
      opacity: 1;
    }
  }

  border-radius: 5px;
  max-width: 500px;
  max-height: 500px;
  width: 400px;
  height: 400px;
  display: flex;
  flex-direction: column;
  background-color: #FFF;
  box-shadow: 0px 10px 30px -5px rgba(0, 0, 0, 0.3);
  padding: 20px;

  input {
    width: 100%;
    padding: 12px 20px;
    font-size: 16px;
    margin: 10px 0 20px 0px;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
    border: ${(props) => props.error ? '1px solid red' : ''};
    color: ${(props) => props.error ? 'red' : '#2E2E2E'};
  }

  code {
    transition: all 1s;
    text-align: center;
    margin: 10px 0 10px 5px;
    color: red;
    display: ${(props) => props.error ? 'block' : 'none'};
  }

  button {
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    border-radius: 5px;
    background-color: #c1866f;
    color: #FFF;
    width: 100%;
    border: none;
    height: 35px;
    font-weight: bold !important;
    font-size: 16px !important;
    cursor: pointer;

    &:hover {
      transition: all 0.5s ;
      background-color: #845d4e;
    }
  }

`

export const Button = styled.div`
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #845d4e;
    color: #d3d3d3;
    width: 100%;
    border: none;
    height: 35px;
    font-weight: bold;
    font-size: 16px;
    cursor: pointer;

    &:hover {
      transition: all 0.5s ;
      background-color: #926b5d;
    }
`