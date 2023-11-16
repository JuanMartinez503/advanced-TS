import {type ComponentPropsWithoutRef } from "react";

type InputValueProps ={
    label:string;
    id:string;
    
} & ComponentPropsWithoutRef<'input'>

export default function InputValue({label,id,...props}:InputValueProps){

    return(
        <p>
            <label htmlFor={id}>{label}</label>
            <input id={id} {...props} />
        </p>
    )
}