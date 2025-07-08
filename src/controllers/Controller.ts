import { Request, Response } from "express";
import { IIdentifiedEntity } from "../domains/interfaces/IIdentifiedEntity";
import { IController } from "./interfaces/IController";
import { IService } from "../services/interfaces/IService";
import { InvalidArgumentError } from "../errors/InvalidArgumentError";

export abstract class Controller<T extends IIdentifiedEntity> implements IController<T>{
    protected service : IService<T>;

    constructor(service : IService<T>){
        this.service = service;
    }

    getAll(res: Response): void {
        let objectSend : any;
        let statusCode : number;
        try{
            objectSend = this.service.getAll();
            statusCode = 200;
        }   
        catch(e : any){
            [statusCode, objectSend] = this.handleError(e);
        }
        res.status(statusCode).send(objectSend);  
    }
    getById(req: Request<{id : number}>, res: Response): void {
        let objectSend : any;
        let statusCode : number;
        try{
            objectSend = this.service.getById(req.params.id);
            statusCode = 200;
        }
        catch(e : any){
            [statusCode, objectSend] = this.handleError(e);
        }
        res.status(statusCode).send(objectSend);
    }
    delete(req: Request<{id : number}>, res: Response): void {
        let objectSend : any;
        let statusCode : number;
        try{
            objectSend = this.service.deleteById(req.params.id);
            statusCode = 200;
        }
        catch(e : any){
            [statusCode, objectSend] = this.handleError(e);
        }
        res.status(statusCode).send(objectSend);
    }

    protected handleError(e : any) : [number, any]{
        if(e instanceof InvalidArgumentError){
            return [400, {"error:" : e.message}]
        }
        if(e instanceof Error){
            return [500, {"error:" : e.message}]

        }
        return [500, {"error:" : e}]
    }

}