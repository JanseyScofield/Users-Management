import { UserDetailsDto } from "../../dtos/users/UserDetailsDto"
import { IRepository } from "../interfaces/IRepository";
import { User } from "./User";

export class UserRepository implements IRepository<User>{
    private users : Map<number,User> = new Map<number, User>();

    getAll(): Map<number, User> {
        return this.users;
    }
    getById(id : number): User | undefined{
        return this.users.get(id);
    }
    register(entity : User): void {
        this.users.set(entity.getId(), entity);
    }
    deleteById(id: number): void {
        this.users.delete(id);
    }
    updateById(data: UserDetailsDto): void {
        const userUpdated : User | undefined = this.users.get(data.id);
        userUpdated?.update(data.name, data.email);
        this.users.set(data.id, userUpdated!);
    }
}