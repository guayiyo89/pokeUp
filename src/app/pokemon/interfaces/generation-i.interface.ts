export interface MainRegion {
    name: string;
    url: string;
}

export interface Move {
    name: string;
    url: string;
}

export interface Language {
    name: string;
    url: string;
}

export interface Name {
    language: Language;
    name: string;
}

export interface PokemonSpecy {
    name: string;
    url: string;
}

export interface Type {
    name: string;
    url: string;
}

export interface VersionGroup {
    name: string;
    url: string;
}

export interface MainGeneration {
    abilities: any[];
    id: number;
    main_region: MainRegion;
    moves: Move[];
    name: string;
    names: Name[];
    pokemon_species: PokemonSpecy[];
    types: Type[];
    version_groups: VersionGroup[];
}