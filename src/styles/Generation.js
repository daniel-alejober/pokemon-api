import styled from "styled-components";
import {
  rojo,
  verde,
  bicho,
  amarillo,
  blanco,
  azul,
  normal,
  volador,
  veneno,
  ghost,
  roca,
  tierra,
  hada,
  hielo,
  psiquico,
  dragon,
  fuego,
  sinisestro,
  acero,
  newverde,
  newrojo,
  newazul,
  newamarillo,
  newroca,
  newnormal,
  newbicho,
  newvolador,
  newveneno,
  newghost,
  newtierra,
  newhada,
  newhielo,
  newpsiquico,
  newdragon,
  newfuego,
  newsiniestro,
  newacero,
} from "./colors";

export const Title = styled.h1`
  text-align: center;
  text-transform: uppercase;
  font-size: 6rem;
  margin: 2rem 0;
  color: #699db4;
`;

export const SubTitle = styled.h3`
  text-align: center;
  text-transform: uppercase;
  font-size: 4rem;
  margin: 2rem 0;
  color: #699db4;
`;

export const ContainerCards = styled.div`
  width: 90%;
  margin: 2rem auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 2rem;
`;

export const Card = styled.div`
  box-shadow: 0px 10px 20px -6px black;
  margin-bottom: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  border-radius: 1rem;
  background: ${({ type }) =>
    type === "grass"
      ? `linear-gradient(to bottom, ${blanco} 0%,${verde} 30%,${verde} 100%)`
      : type === "fire"
      ? `linear-gradient(to bottom, ${blanco} 0%,${fuego} 30%,${fuego} 100%)`
      : type === "normal"
      ? `linear-gradient(to bottom, ${blanco} 0%,${normal} 30%,${normal} 100%)`
      : type === "water"
      ? `linear-gradient(to bottom, ${blanco} 0%,${azul} 30%,${azul} 100%)`
      : type === "bug"
      ? `linear-gradient(to bottom, ${blanco} 0%,${bicho} 30%,${bicho} 100%)`
      : type === "poison"
      ? `linear-gradient(to bottom, ${blanco} 0%,${veneno} 30%,${veneno} 100%)`
      : type === "ground"
      ? `linear-gradient(to bottom, ${blanco} 0%,${tierra} 30%,${tierra} 100%)`
      : type === "fighting"
      ? `linear-gradient(to bottom, ${blanco} 0%,${rojo} 30%,${rojo} 100%)`
      : type === "psychic"
      ? `linear-gradient(to bottom, ${blanco} 0%,${psiquico} 30%,${psiquico} 100%)`
      : type === "rock"
      ? `linear-gradient(to bottom, ${blanco} 0%,${roca} 30%,${roca} 100%)`
      : type === "electric"
      ? `linear-gradient(to bottom, ${blanco} 0%,${amarillo} 30%,${amarillo} 100%)`
      : type === "fairy"
      ? `linear-gradient(to bottom, ${blanco} 0%,${hada} 30%,${hada} 100%)`
      : type === "ice"
      ? `linear-gradient(to bottom, ${blanco} 0%,${hielo} 30%,${hielo} 100%)`
      : type === "dragon"
      ? `linear-gradient(to bottom, ${blanco} 0%,${dragon} 30%,${dragon} 100%)`
      : type === "ghost"
      ? `linear-gradient(to bottom, ${blanco} 0%,${ghost} 30%,${ghost} 100%)`
      : type === "dark"
      ? `linear-gradient(to bottom, ${blanco} 0%,${sinisestro} 30%,${sinisestro} 100%)`
      : type === "steel"
      ? `linear-gradient(to bottom, ${blanco} 0%,${acero} 30%,${acero} 100%)`
      : type === "flying"
      ? `linear-gradient(to bottom, ${blanco} 0%,${volador} 30%,${volador} 100%)`
      : ""};
`;

export const ContainerImg = styled.div`
  width: 70%;
  height: 30rem;
  margin: 0 auto;
  /* position: relative; */
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
`;
export const NameP = styled.h3`
  text-align: center;
  margin: 0.5rem auto;
  text-transform: capitalize;
  letter-spacing: 1px;
`;
export const ContainerTypes = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 2rem;
  margin: 1rem auto;
`;
export const TypeP = styled.p`
  border: ${({ type }) =>
      type === "grass"
        ? newverde
        : type === "fire"
        ? newfuego
        : type === "normal"
        ? newnormal
        : type === "water"
        ? newazul
        : type === "bug"
        ? newbicho
        : type === "poison"
        ? newveneno
        : type === "ground"
        ? newtierra
        : type === "fighting"
        ? newrojo
        : type === "psychic"
        ? newpsiquico
        : type === "rock"
        ? newroca
        : type === "electric"
        ? newamarillo
        : type === "fairy"
        ? newhada
        : type === "ice"
        ? newhielo
        : type === "dragon"
        ? newdragon
        : type === "ghost"
        ? newghost
        : type === "dark"
        ? newsiniestro
        : type === "steel"
        ? newacero
        : type === "flying"
        ? newvolador
        : ""}
    2px solid;
  padding: 0.5rem 2rem;
  border-radius: 2rem;
  text-transform: capitalize;
  font-weight: bold;
  font-size: 2rem;
  color: ${({ type }) =>
    type === "grass"
      ? newverde
      : type === "fire"
      ? newfuego
      : type === "normal"
      ? newnormal
      : type === "water"
      ? newazul
      : type === "bug"
      ? newbicho
      : type === "poison"
      ? newveneno
      : type === "ground"
      ? newtierra
      : type === "fighting"
      ? newrojo
      : type === "psychic"
      ? newpsiquico
      : type === "rock"
      ? newroca
      : type === "electric"
      ? newamarillo
      : type === "fairy"
      ? newhada
      : type === "ice"
      ? newhielo
      : type === "dragon"
      ? newdragon
      : type === "ghost"
      ? newghost
      : type === "dark"
      ? newsiniestro
      : type === "steel"
      ? newacero
      : type === "flying"
      ? newvolador
      : ""};
`;
