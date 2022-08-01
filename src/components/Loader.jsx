import React from "react";
import styled from "styled-components";
import { rojo } from "../styles/colors";

const LoaderContainer = styled.div`
  display: inline-block;
  width: 80px;
  height: 80px;

  &::after {
    content: " ";
    display: block;
    width: 64px;
    height: 64px;
    margin: 8px;
    border-radius: 50%;
    border: 6px solid ${rojo};
    border-color: ${rojo} transparent ${rojo} transparent;
    animation: lds-dual-ring 1.2s linear infinite;
  }
  @keyframes lds-dual-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const Loader = () => {
  return <LoaderContainer></LoaderContainer>;
};

export default Loader;
