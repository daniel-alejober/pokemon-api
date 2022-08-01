import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getPokemonApi } from "../services/request";
import Header from "../components/Header";
import { ContainerBG, SubContainer } from "../styles/Containers";
import {
  ContainerImg,
  ContainerInfo,
  ContainerStats,
  Stats,
  Porciento,
} from "../styles/Pokemon";
import { ContainerTypes, TypeP } from "../styles/Generation";

const Pokemon = () => {
  const [dataPokemon, setPokemon] = useState({});
  const [imagePokemon, setImagePokemon] = useState({});
  const { name } = useParams();

  useEffect(() => {
    const getPokemon = async () => {
      const data = await getPokemonApi(name);
      if (data) {
        setPokemon(data);
        setImagePokemon(data?.sprites ? data?.sprites : data);
        console.log(data);
      }
    };
    getPokemon();
  }, []);

  return (
    <ContainerBG bg="https://wallpaperaccess.com/full/45674.jpg">
      <Header />
      <SubContainer>
        <ContainerInfo>
          <ContainerImg>
            <img
              src={
                imagePokemon?.other?.home?.front_default
                  ? imagePokemon?.other?.home?.front_default
                  : imagePokemon?.front_default
              }
              alt={name}
            />
          </ContainerImg>
          <h1>
            {name} <span>#{dataPokemon.id}</span>
          </h1>
          <ContainerTypes>
            {dataPokemon.types &&
              dataPokemon?.types.map((type) => (
                <TypeP type={type?.type?.name} key={type.slot}>
                  {type?.type?.name}
                </TypeP>
              ))}
          </ContainerTypes>
          <ContainerStats>
            <h2>Base Stats</h2>
            {dataPokemon.stats &&
              dataPokemon.stats.map((stat) => (
                <Stats key={stat.id}>
                  <span>{stat.stat.name}</span>
                  <Porciento>
                    <div width={stat.base_stat}></div>
                  </Porciento>
                </Stats>
              ))}
          </ContainerStats>
        </ContainerInfo>
      </SubContainer>
    </ContainerBG>
  );
};

export default Pokemon;
