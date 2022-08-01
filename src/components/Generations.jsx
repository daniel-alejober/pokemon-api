import React from "react";
import { generaciones } from "../constantes/generaciones";
import { Container, ContainerG, Img, P, NewLink } from "../styles/Generations";

const Generations = () => {
  return (
    <Container>
      {generaciones.map((generacion) => (
        <NewLink key={generacion.id} to={`/generation/${generacion.id}`}>
          <ContainerG>
            <P>{generacion.nombre}</P>
            <Img src={generacion.img} alt={generacion.nombre} />
          </ContainerG>
        </NewLink>
      ))}
    </Container>
  );
};

export default Generations;
