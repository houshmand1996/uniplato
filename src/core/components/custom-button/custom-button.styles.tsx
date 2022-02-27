import React from 'react';
import styled, { css } from 'styled-components';
import { SpinnerContainer } from '../spinner';
import {sassVar} from '../../sass-var';
const mainColor = sassVar.primaryColor;


interface Props extends React.HTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  isGoogleSignIn?:boolean,
  inverted?:boolean,
  round?:boolean,
}

const buttonStyles = css`
  background-color: ${mainColor};
  color: white;
  border: none;

  &:hover {
    background-color: white;
    color: ${mainColor};
    border: 1px solid ${mainColor};
  }
`;

const invertedButtonStyles = css`
  background-color: white;
  color: ${mainColor};
  border: 2px solid ${mainColor};

  &:hover {
    background-color: ${mainColor};
    color: white;
  }
`;

const googleSignInStyles = css`
  background-color: #4D774E;
  color: white;
  border: none;
  &:hover {
    background-color: #164A41;
  }
`;

const getButtonStyles = (props:Props) => {
  if (props.isGoogleSignIn) {
    return googleSignInStyles;
  }

  return !props.inverted ? invertedButtonStyles : buttonStyles;
};

export const CustomButtonSpinner = styled(SpinnerContainer)<Props>`
  width:25px !important;
  height:25px !important;
  position: absolute;
  top: 11px;
  left: 5%;
  ${({round}) => round && `
    left:50%;
    top:50%;
    // transform:translateX(-50%);
  `}
`;

export const CustomButtonContainer = styled.button<Props>`
  flex:1 1 auto;
  position:relative;
  margin-left:5px;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 15px;
  text-transform: uppercase;
  font-family: 'Open Sans Condensed';
  font-weight: bolder;
  cursor: pointer;
  display: flex;
  justify-content: center;
  border-radius:100px;
  transition:all 0.8s;
  ${getButtonStyles};
  ${({round}) => round && ` 
    border-radius: 100% ;  
    width: 60px;
    height: 60px;
    padding: 0 ;
    font-size:30px;
    flex: 0 0 auto;
  ` }
  
`;
