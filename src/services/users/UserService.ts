import { Service } from "../Service";
import {User} from "../../domains/users/User"
import { IRepository } from "../../domains/interfaces/IRepository";
import { InvalidArgumentError } from "../../errors/InvalidArgumentError";
import { UserDetailsDto} from "../../dtos/users/UserDetailsDto";

export class UserService extends Service<User>{
    constructor(repository : IRepository<User>){
        super(repository);
    }

    register(name : string, email : string): void {
        try{

            const newUser : User = new User(name, email);
            this.repository.register(newUser);
        }
        catch(e : any){
            if(e instanceof InvalidArgumentError){
                throw new InvalidArgumentError(e.message);
            }
            throw e;
        }
    }
    updateById(id : number, name : string, email : string): void {
        try{
            const data : UserDetailsDto = new UserDetailsDto();
            data.id = id;
            data.name = name;
            data.email = email;
            this.repository.updateById(data);
        }
        catch(e : any){
            if(e instanceof InvalidArgumentError){
                throw new InvalidArgumentError(e.message);
            }
            throw e;
        }
    }

}