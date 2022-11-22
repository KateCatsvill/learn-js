import React from "react";
import {multiplTwoNumbers} from "./functions";

type CalcProps = {
    a: number;
    b: number;
}

export const Calc: React.FC<CalcProps> = ({a, b}) => (
    <>
        <div>{a} * {b} = <b>{multiplTwoNumbers(a, b)}</b></div>
    </>

)