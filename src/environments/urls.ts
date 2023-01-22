import { environment } from "./environment";

export const URLS = {
    pokemon1stGen: `${environment.config.urlApi}/generation/1`,
    getPokemonData: `${environment.config.urlApi}/pokemon`,
    getHabitats: `${environment.config.urlApi}/pokemon-habitat`,
    getTypes: `${environment.config.urlApi}/type`,
    getRegion: `${environment.config.urlApi}/region`,
    getImgPokemon: environment.config.urlImgs
}