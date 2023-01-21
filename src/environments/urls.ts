import { environment } from "./environment";

export const URLS = {
    pokemon1stGen: `${environment.config.urlApi}/generation/1`,
    getPokemonData: `${environment.config.urlApi}/pokemon`,
    getImgPokemon: environment.config.urlImgs
}