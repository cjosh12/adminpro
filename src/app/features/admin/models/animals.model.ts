import { Species } from "./species.model";

export interface Animals{
    animal_id:        string;
    name:             string;
    age:              number;
    gender:           string;
    birth:            string;
    arrival:          string;
    health_condition: string;
    exhibit_status:   string;
    is_alive:         boolean;
    created_at:       string;
    updated_at:       string;
    species:          Species;
    medical_record:   null;
}
