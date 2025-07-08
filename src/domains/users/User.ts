import { InvalidArgumentError } from "../../errors/InvalidArgumentError";
import { IIdentifiedEntity } from "../interfaces/IIdentifiedEntity";

export class User implements IIdentifiedEntity{
    private static userCount : number = 0;
    private id : number;
    private name : string;
    private email : string;

    constructor(name : string, email : string){
        this.validate(name, email);
        this.id = ++User.userCount;
        this.name = name;
        this.email = email;
    }

    public update(name : string, email : string) : void{
        this.validate(name, email);
        this.name = name;
        this.email = email;
    }

    private validate(name : string, email : string) : void{
        if(!name.trim()){
            throw new InvalidArgumentError("Name is invalid");
        }
        if(!email || !email.includes("@") || !email.includes(".com")){
            throw new InvalidArgumentError("Email is invalid");
        }
    }

    public getId(): number {
        return this.id;
    } 

    public getName(): string {
        return this.name;
    }

    public getEmail(): string{
        return this.email;
    }
}