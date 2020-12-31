import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 50px 20px 0 20px;
`

export const Card = styled.div`
  animation: show .5s cubic-bezier(.1,.82,.25,1);
  background: #fff;
  overflow: auto !important;

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
  width: 100%;
  max-height: 600px;
  display: flex;
  flex-direction: column;
  background-color: #FFF;
  box-shadow: 0px 10px 30px -5px rgba(0, 0, 0, 0.3);
  padding: 0px 3px;
  
table {
  border-radius: 5px;
  font-family: arial;
  max-width: 100%;
  background-color: transparent;
  border-collapse: collapse;
  border-spacing: 0;
}

tbody { 
  .actions {
    button {
      background: none;
      border: none;
      border-radius: 100%;
      cursor: pointer;
        
      svg {
        fill: #FF0000;

        &:hover {
          fill: #ec2b2b;
        }
       }
      
      &:nth-child(2) {
        svg {
          fill: #FFA500;

          &:hover {
            fill: #f7a818;
          }
        }
        margin-left: 20px;
      }
    }
  }
}

.table { 
  min-width: 400px;
  width: 100%;
  margin-bottom: 20px;
}

.table th,
.table td {
  font-weight: normal;
  font-size: 14px;
  font-family: sans-serif;
  padding: 10px 15px;
  line-height: 20px;
  text-align: center;
  vertical-align: middle;
  border-top: 1px solid #dddddd;
}

.table thead th {
  background: #eeeeee;
  vertical-align: bottom;
  font-weight: bold;
}   

.table tbody > tr:nth-child(odd) > td,
.table tbody > tr:nth-child(odd) > th {
  background-color: #fafafa;
}    

`

export const CreateNew = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 20px;

  button {
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 100%;
    border: none;
    background: #e58953;
    cursor: pointer;

    svg { 
      width: 12px;
      height: 12px;
      fill: #FFF;
    }

    &:hover {
      transition: all 0.3s;
      background: #c1866f;
    }
  }
`
interface IModal {
  open: boolean;
}

export const Modal = styled.div<IModal>`
  display: ${(props) => props.open ? 'block' : 'none'};
  position: fixed; 
  z-index: 1; 
  padding-top: 100px; 
  left: 0;
  top: 0;
  width: 100%; 
  height: 100%; 
  overflow: auto; 
  background-color: rgb(0,0,0); 
  background-color: rgba(0,0,0,0.4); 
`

export const ModalContent = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  background-color: #fefefe;
  margin: auto;
  padding: 20px;
  border: 1px solid #888;
  width: 80%;
  position: relative;

  input {
    width: 100%;
    padding: 12px 20px;
    font-size: 16px;
    margin: 10px 0 20px 0px;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
    color: #2E2E2E;
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

  .close {
    position: absolute;
    color: #aaaaaa;
    top: 0;
    right: 10px;
    font-size: 28px;
    font-weight: bold;
  }

  .close:hover,
  .close:focus {
    color: #000;
    text-decoration: none;
    cursor: pointer;
  }
`