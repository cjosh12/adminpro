import { Biomes } from "./biome.model";
import { Diets } from "./diet.model";


export interface Species {
    species_id:      string;
    name:            string;
    description:     string;
    scientific_name: string;
    created_at:      string;
    updated_at:      string;
    biome:           Biomes;
    diets:           Diets[];
}