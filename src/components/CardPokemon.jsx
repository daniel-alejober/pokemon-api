import React, { useState, useEffect } from "react";
import { NewLink } from "../styles/Generations";
import { getPokemonApi } from "../services/request";
import {
  Card,
  Img,
  ContainerImg,
  NameP,
  ContainerTypes,
  TypeP,
} from "../styles/Generation";

const CardPokemon = ({ pokemon }) => {
  const [dataPokemon, setDataPokemon] = useState({});
  const [imagePokemon, setImagePokemon] = useState({});

  useEffect(() => {
    const getPokemon = async () => {
      const data = await getPokemonApi(pokemon?.name);
      if (data) {
        setDataPokemon(data);
        setImagePokemon(data?.sprites ? data?.sprites : data);
      }
    };
    getPokemon();
  }, []);

  return (
    <NewLink to={`/pokemon/${pokemon?.name}`}>
      <Card type={dataPokemon.types && dataPokemon?.types[0].type.name}>
        <ContainerImg>
          {Object.keys(imagePokemon).length && (
            <Img
              src={
                imagePokemon?.other?.home?.front_default
                  ? imagePokemon?.other?.home?.front_default
                  : imagePokemon?.front_default
              }
              alt={pokemon?.name}
            />
          )}
        </ContainerImg>
        <NameP> {pokemon?.name}</NameP>
        <ContainerTypes>
          {dataPokemon.types &&
            dataPokemon?.types.map((type) => (
              <TypeP type={type?.type?.name} key={type.slot}>
                {type?.type?.name}
              </TypeP>
            ))}
        </ContainerTypes>
      </Card>
    </NewLink>
  );
};

export default CardPokemon;
