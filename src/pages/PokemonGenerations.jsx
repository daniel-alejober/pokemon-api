import React, { useState, useEffect, Suspense } from "react";
import { useParams } from "react-router-dom";
import { getPokemonsGenerationApi } from "../services/request";
import Header from "../components/Header";
import Loader from "../components/Loader";
/*
 *Asi se usa el lazy para que solo carguen los componentes que se vayan viendo en pantalla y no todos, para mostrar este componente necesitamos usar SUSPENSE  */
const LazyCard = React.lazy(() => import("../components/CardPokemon"));
import { ContainerBG, SubContainer } from "../styles/Containers";
import { Title, SubTitle, ContainerCards } from "../styles/Generation";

const PokemonGenerations = () => {
  const { id } = useParams();
  const [generation, setGeneration] = useState({});
  const [especies, setEspecies] = useState([]);
  const { main_region, names } = generation;

  useEffect(() => {
    const getPokemonsGeneration = async () => {
      const data = await getPokemonsGenerationApi(id);
      setGeneration(data);
      setEspecies(data.pokemon_species);
    };
    getPokemonsGeneration();
  }, []);

  /*
   *Para poder usar el componente lo tenemos que envolver dentro de Suspense forzosamente Suspense debe de llevar el atributo fallback que lo que se mostrara cuando se esten cargando los componentes (el loader)*/
  //!Puedes usar mas de un elemento lazy dentro de un mismo Suspense

  return (
    <ContainerBG bg="https://wallpaperaccess.com/full/4351080.jpg">
      <Header />
      <SubContainer>
        <Title>Region {main_region?.name}</Title>
        <SubTitle>{names && names[5]?.name}</SubTitle>
        <ContainerCards>
          {especies &&
            especies.map((pokemon) => (
              <Suspense key={pokemon.name} fallback={<Loader />}>
                <LazyCard pokemon={pokemon} />
              </Suspense>
            ))}
        </ContainerCards>
      </SubContainer>
    </ContainerBG>
  );
};

export default PokemonGenerations;
