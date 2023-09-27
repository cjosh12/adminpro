import { User } from "./user.model";

export interface RegisterResponse extends User {
    roles: Array<string>;
    create_at: Date;
    update_at: Date;
}
