import { Link } from "react-router-dom";
import styled from "styled-components";
import { blanco } from "./colors";

export const Container = styled.div`
  width: 100%;
  padding: 2rem 3rem;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 2rem;
`;

export const ContainerG = styled.div`
  box-shadow: 0px 10px 20px -6px black;
  width: 100%;
  height: 20rem;
  border-radius: 0.5rem;
  padding: 1rem;
  background-color: ${blanco};
  transition: 1s ease;

  &:hover {
    transform: translateY(-1rem);
  }
`;

export const Img = styled.img`
  width: 100%;
  max-height: 100%;
  padding: 2rem;
`;

export const P = styled.p`
  text-align: center;
  font-weight: bold;
  font-size: 1.8rem;
  color: #2b73b9;
  letter-spacing: 1px;
`;
export const NewLink = styled(Link)`
  text-decoration: none;
`;
