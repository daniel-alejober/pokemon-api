import styled from "styled-components";

export const ContainerHeader = styled.div`
  width: 100%;
  height: 5%;
  padding: 6rem 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  z-index: 100;
`;
export const Img = styled.img`
  object-fit: contain;
`;
export const ContainerInput = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;
export const Input = styled.input`
  border-radius: 0.5rem;
  outline: none;
  padding: 1rem 3rem;
  border: 1px solid #808080;
  font-size: 1.8rem;
  color: #808080;
`;
export const SvgContainer = styled.div`
  width: 1.5rem;
  position: absolute;
  margin-left: 1rem;
  color: #808080;
`;
