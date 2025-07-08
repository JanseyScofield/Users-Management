import { IIdentifiedEntity } from "../domains/interfaces/IIdentifiedEntity";
import { IRepository } from "../domains/interfaces/IRepository";
import { IService } from "./interfaces/IService";
import { InvalidArgumentError } from "../errors/InvalidArgumentError";

export abstract class Service<T extends IIdentifiedEntity> implements IService<T>{
    protected repository : IRepository<T>;

    constructor(repository : IRepository<T>){
        this.repository = repository;
    }
    
    getAll(): T[] {
        const map : Map<number, T> = this.repository.getAll();
        const array : T[] = Array.from(map.values());
        return array;
    }
    getById(id: number): T | undefined {
        if(id < 1 || id == undefined){
            throw new InvalidArgumentError("Invalid id");
        }
        return this.repository.getById(id);
    }
    deleteById(id: number): void {
        if(id < 1 || id == undefined){
            throw new InvalidArgumentError("Invalid id");
        }
        const entity : T | undefined = this.repository.getById(id);
        if(entity == undefined){
            throw new InvalidArgumentError("Entity not found");
        }
        this.repository.deleteById(id);
    }
}