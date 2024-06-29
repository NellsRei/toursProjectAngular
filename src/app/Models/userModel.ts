export interface User{
    userid: string,
    username:string,
    Email:string,
    Password:string,
    isDeleted:number,
    isEmailSent: number,
    role:string
}
export interface Payload{
    Sub: string,
    Name: string,
    role:string
}

export interface RegisterResponse{
    Message:string
}

export interface LoginReq{
    userid:string,
    Email:string,
    Password:string
}

export interface LoginRes{
    Message:string,
    token:string,
    role:string,
    username:string
}