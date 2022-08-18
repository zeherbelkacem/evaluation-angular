import { Role } from "./role";

export interface User {
    id: number;
    userName: string;
    password: string;
    active: boolean;
    roles: Role[];
}
