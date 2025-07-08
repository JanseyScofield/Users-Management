import { Controller } from "./Controller";
import { User } from "../domains/users/User";
import { UserDetailsDto } from "../dtos/users/UserDetailsDto";
import { Request, Response } from "express";
import { IService } from "../services/interfaces/IService";
import { UserService } from "../services/UserService";
import { InvalidArgumentError } from "../errors/InvalidArgumentError";

export class UserController extends Controller<User>{
    constructor(service : IService<User>){
        super(service);
    }

    register(req : Request<{}, {}, UserDetailsDto>, res : Response) : void{
        let objectSend : any;
        let statusCode : number;
        try{
            (this.service as UserService).register(req.body.name, req.body.email);
            objectSend = {"message" : "User created"};
            statusCode = 201;
        }
        catch(e : any){
            [statusCode, objectSend] = this.handleError(e);
        }
        res.status(statusCode).send(objectSend);    

    }

    updateById(req : Request<{id : number}, {}, UserDetailsDto>, res : Response) : void{
        let objectSend : any;
        let statusCode : number;
        try{
            (this.service as UserService).updateById(req.params.id, req.body.name, req.body.email);
            objectSend = {"message" : "User updated"};
            statusCode = 200;
        }
        catch(e : any){
            [statusCode, objectSend] = this.handleError(e);
        }
        res.status(statusCode).send(objectSend);  
    }
}