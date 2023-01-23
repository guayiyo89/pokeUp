import { MainBase } from "../interfaces/base"

export const mock: MainBase = {
    count: 2,
    next: null,
    previous: null,
    results: [
        {
            "name": "cave",
            "url": "https://pokeapi.co/api/v2/pokemon-habitat/1/"
        },
        {
            "name": "forest",
            "url": "https://pokeapi.co/api/v2/pokemon-habitat/2/"
        }
    ]
}