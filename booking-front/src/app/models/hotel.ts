import { User } from "../auth/models/user";
import { Address } from "./address";
import { City } from "./city";
import { ImageModel } from "./image";
import { Room } from "./room";

export interface Hotel {
    id: number;
    name:string;
    phone: string;
    address: Address;
    star: number;
    city: City;
    images :ImageModel[];
    user: User

}
