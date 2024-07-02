import { createActionGroup, props } from "@ngrx/store";
import { LoginReq, LoginRes } from "../../Models/userModel";



export const AuthActions = createActionGroup({
    source: "AUTH_API",
    events:{
        //log in auth
        'login':props<{user:LoginReq}>(),    //from the authentication service.....(what's being taken in)
        'login success':props<{response:LoginRes}>(), //the observable from authentication service
        'login failure':props<{Message:string}>()  //for the json message
    }
})