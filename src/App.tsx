import React from 'react';
import logo from './logo.svg';
import './App.css';
import {calcTwoVars, multiplTwoNumbers} from './functions';
import {Greeting} from "./Greeting";
import{LinkComponent} from "./LinkComponent";
import {Lorem} from "./Lorem";
import{Calc} from "./Calc";


function App() {

    const drawCats = ( howManyTimes:number ) => {
        for (let i = 0; i < howManyTimes; i++) {
            console.log (i + " =^.^=") ;
        }
    };
    drawCats (5);

    const animals = [] ;
    animals.push ("Кот") ;
    animals.push ("Пес") ;
    animals.push ("Лама") ;
    animals.unshift("Мартышка");
    animals.unshift ("Белый медведь");

    console.log (animals);

    const lastAnimal = animals.pop () ;
    console.log (lastAnimal);
    console.log (animals);
    animals.pop ();
    console.log (animals);
    animals.unshift (lastAnimal) ;
    console.log (animals);

    const firstAnimal = animals.shift();
    console.log (firstAnimal);
    console.log (animals);







    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <Greeting firstName={'Kate'} lastName={'Topchilo'} country={'USA'}/>
                {/*<div>*/}
                {/*    {calcTwoVars(5,2)}*/}
                {/*</div>*/}
                {/*<div>*/}
                {/*    {multiplTwoNumbers(5,2)}*/}
                {/*</div>*/}
                <Calc a={5} b={10} />
                <Calc a={10} b={4} />
                <div>----------</div>
                <div>
                    10 * 5 = <b>50</b>
                </div>
                <div>
                    10 * 6 = <b>60</b>
                </div>

                <Greeting firstName={'Misha'} lastName={'Topchilo'} country={'USA'}/>
                <LinkComponent name={'Yandex'} link={'http://ya.ru'} />
                <LinkComponent name={'Google'} link={'http://google.com'} />
                {/*<Lorem name={'Kate'} />*/}
                {/*<Lorem name={'Misha'} />*/}
            </header>
        </div>
    );
}

export default App;
