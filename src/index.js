/**
 * Create the class Calculator
 * this class has 3 methods:
 * - history: once the = key is pressed, it keeps the last value in
 *            memory in an array
 * - equals: returns the value (thanks to an 'eval' function)
 * - clear: clears the history
 */

const calculatorScreen = document.querySelector("#calculator .screen");
const equalsHTMLSelector = document.querySelector("#calculator .eval");
const historyUL = document.querySelector('#history');

class Calculatror {
    constructor() {
        //State => stuff that chages
        this._histroy = [];
    }
    //push date in empty array
    history() {
        this._histroy.push(calculatorScreen.innerHTML); 
        historyUL.innerHTML += `<li>${calculatorScreen.innerHTML} = ${this.equals()}</li>`;
    }
    equals() {
        return eval(calculatorScreen.innerHTML.replaceAll("x","*"));
    }
    clear() {
        calculatorScreen.innerHTML = ""; 
    }
}
const myCalculator = new Calculatror();


        
    // add calculation to this ._history
    // add current calculatio to #history UL
    function writeValue (value){
        calculatorScreen.innerHTML += value; 
    }

    document.querySelectorAll("#calculator span").forEach((key) => {
        if (key.innerText !== "=") {
            key.addEventListener("click", (e) => print(e.target.innerText));
        }
    });

    equalsHTMLSelector.addEventListener('click', () => {
        myCalculator.history()
        calculatorScreen.innerHTML = myCalculator.equals();
    });
    
    window.onload = function () {
        calculatorScreen.focus();
    };
/**
 * This function below write the value of the pressed key on the screen
 * The += is the equivalent of:
 * document.querySelector('.screen').innerHTML = document.querySelector('.screen').innerHTML + val;
 *
 **/
//this code listen to every key on the calculator and add the value on the screen

// Implement here the event when the = key is pressed