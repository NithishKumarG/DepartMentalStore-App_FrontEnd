import { User } from "./User";

export class CommonResponse{

    status?:string;

    content?:object;
    constructor(user:any){

        this.status=user.status;

        this.content=user.object;

    }

}