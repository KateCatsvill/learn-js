import React from "react";
import {Lorem} from "./Lorem";

type GreetingProps = {
    firstName: string;
    lastName: string;
    country: string;

}

 export const Greeting: React.FC<GreetingProps> = ({ firstName, lastName, country}) => {
    const name: string = firstName + ' ' + lastName;

    

    return (
        <p>
            <div>Hello my darling</div>
            <div className={'Name'}>{firstName} {lastName}</div>
            <div>Welcome to the <b> {country} </b></div>
            <Lorem name={name} />
        </p>
    )
 }
