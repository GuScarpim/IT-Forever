import styled from 'styled-components';

interface ISpinner {
  button?: any;
}

export const Loader = styled.div<ISpinner>`
    border: 5px solid #f3f3f3;
    border-top: 5px solid #e58953;
    border-radius: 50%;
    width: ${(props) => props.button ? '19px' : '30px'};
    height: ${(props) => props.button ? '19px' : '30px'};;
    animation: spin 1s linear infinite;
    margin-bottom: 10px;

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`