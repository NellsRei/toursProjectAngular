export interface Tour{
    tourid:string,
    tourname:string,
    destination:string,
    description:string,
    price:string
}

export interface TourResponse{
    Message:string
}

export interface TourReq{
    tourid:string,
    tourname: string,
    destination:string,
    description:string,
    price:number
}