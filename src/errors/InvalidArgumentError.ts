export class InvalidArgumentError extends Error{
    constructor(message? : string){
        super(message || "Invalid argument");
    }
}