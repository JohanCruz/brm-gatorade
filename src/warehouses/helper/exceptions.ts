import { HttpException, HttpStatus } from "@nestjs/common";

export class CallException {

    constructor(){}

    message(message= "May be something was wrong !!"){
        throw new HttpException(
            message,
            HttpStatus.BAD_REQUEST,
        );
    }  

}