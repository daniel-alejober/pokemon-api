import React from "react";
import { Link } from "react-router-dom";
import {
  ContainerHeader,
  Img,
  ContainerInput,
  Input,
  SvgContainer,
} from "../styles/Header";

const Header = () => {
  return (
    <ContainerHeader>
      <Link to="/">
        <Img
          src="https://upload.wikimedia.org/wikipedia/commons/9/98/International_Pok%C3%A9mon_logo.svg"
          alt="pokemon"
        />
      </Link>
      <ContainerInput>
        <Input type="text" placeholder="Buscar Pokémon" />
        <SvgContainer>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </SvgContainer>
      </ContainerInput>
    </ContainerHeader>
  );
};

export default Header;
