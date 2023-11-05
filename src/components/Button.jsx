import React from "react";
import { NavLink } from "react-router-dom";
import styled, { keyframes } from "styled-components";

const moveLeft = keyframes`
  0% {
    left: -100%;
  }
  50%, 100% {
    left: 100%;
  }
`;

const moveTop = keyframes`
  0% {
    top: -100%;
  }
  50%, 100% {
    top: 100%;
  }
`;

const moveRight = keyframes`
  0% {
    right: -100%;
  }
  50%, 100% {
    right: 100%;
  }
`;

const moveBottom = keyframes`
  0% {
    bottom: -100%;
  }
  50%, 100% {
    bottom: 100%;
  }
`;

const ButtonContainer = styled.button`
  position: relative;
  display: inline-block;
  padding: 10px 20px;
  font-size: 16px;
  text-decoration: none;
  text-transform: uppercase;
  overflow: hidden;
  transition: 0.5s;
  margin-top: 40px;
  letter-spacing: 4px;
  background: transparent;
  border: none;
  cursor: pointer;

  a{
    color: #27DEBF;
  }

  &:hover {
    a {
        color: #fff;
        transition:all easi-in-out;

    }
      background: #27DEBF;
      border-radius: 5px;
      box-shadow: 0 0 5px #27DEBF, 0 0 25px #27DEBF, 0 0 50px #27DEBF,
        0 0 100px #27DEBF;
        transition:all easi-in-out;
    
  }
`;

const Span = styled.span`
  position: absolute;
  display: block;
`;

const Span1 = styled(Span)`
  top: 0;
  left: -100%;
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, transparent, #27DEBF);
  animation: ${moveLeft} 1s linear infinite;
`;

const Span2 = styled(Span)`
  top: -100%;
  right: 0;
  width: 2px;
  height: 100%;
  background: linear-gradient(180deg, transparent, #27DEBF);
  animation: ${moveTop} 1s linear infinite;
  animation-delay: 0.25s;
`;

const Span3 = styled(Span)`
  bottom: 0;
  right: -100%;
  width: 100%;
  height: 2px;
  background: linear-gradient(270deg, transparent, #27DEBF);
  animation: ${moveRight} 1s linear infinite;
  animation-delay: 0.5s;
`;

const Span4 = styled(Span)`
  bottom: -100%;
  left: 0;
  width: 2px;
  height: 100%;
  background: linear-gradient(360deg, transparent, #27DEBF);
  animation: ${moveBottom} 1s linear infinite;
  animation-delay: 0.75s;
`;

const Button = ({ to, text }) => {
  return (
    <ButtonContainer className="btn-nxt">
      <Span1 />
      <Span2 />
      <Span3 />
      <Span4 />

      <NavLink to={to}>{text}</NavLink>
    </ButtonContainer>
  );
};

export default Button;
