export const getPokemonsGenerationApi = async (id) => {
  try {
    const url = "https://pokeapi.co/api/v2/generation";
    const respuesta = await fetch(`${url}/${id}`);
    const data = await respuesta.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getPokemonApi = async (nombre) => {
  try {
    const url = "https://pokeapi.co/api/v2/pokemon";
    const respuesta = await fetch(`${url}/${nombre}`);
    const data = await respuesta.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
