import { Dto } from "../../dtos/Dto";
import { IIdentifiedEntity } from "./IIdentifiedEntity";

export interface IRepository<T extends IIdentifiedEntity>{
    getAll() : Map<number, T>;
    getById(id : number) : T | undefined;
    register(entity : T) : void;
    deleteById(id : number) : void;
    updateById(data : Dto) : void;
}