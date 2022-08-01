import styled from "styled-components";
import { blanco } from "./colors";

export const ContainerInfo = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  h1 {
    text-align: center;
    text-transform: capitalize;
    margin: 0.5rem auto;
    color: #ffcb05;
  }
`;

export const ContainerImg = styled.div`
  position: fixed;
  img {
    top: 0;
  }
`;

export const ContainerStats = styled.div`
  h2 {
    color: #2a74ba;
  }
`;

export const Stats = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;

  span {
    text-transform: capitalize;
    margin: 0.5rem 0;
  }
`;

export const Porciento = styled.div`
  display: block;
  width: 100%;
  height: 1rem;
  border-radius: 1rem;
  border: 1px solid black;
  position: relative;

  div {
    position: absolute;
    display: block;
    height: 0.8rem;
    border-radius: 1rem;
    border: 1px solid black;
    background-color: red;
    width: ${({ width }) => `${width}%`};
  }
`;
