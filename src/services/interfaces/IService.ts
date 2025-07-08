import { IIdentifiedEntity } from "../../domains/interfaces/IIdentifiedEntity";

export interface IService<T  extends IIdentifiedEntity>{
    getAll() : T[];
    getById(id : number) : T | undefined;
    deleteById(id : number) : void;
}