import styled from "styled-components";

export const ContainerBG = styled.div`
  width: 100%;
  background-image: ${({ bg }) => `url(${bg})`};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-attachment: fixed;
  padding-bottom: 2rem;
`;
export const SubContainer = styled.div`
  width: 100%;
  padding-top: 8%;
`;
