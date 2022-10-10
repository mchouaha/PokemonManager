import axios from "axios"

import { PokemonType } from "../interfaces"

export const fetchListPokemon = async (): Promise<PokemonType[]> => (await axios.get(`http://localhost:3001/pokemons`)).data
