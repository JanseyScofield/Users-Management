import { Request, Response } from "express";
import { IIdentifiedEntity } from "../../domains/interfaces/IIdentifiedEntity";
import { Dto } from "../../dtos/Dto";

export interface IController<T extends IIdentifiedEntity>{
    getAll(res : Response): void;
    getById(req : Request<{id : number}>, res : Response): void;
    delete(req : Request<{id : number}>, res : Response): void;
}