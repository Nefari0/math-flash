import "./App.css";
import { useState, useEffect } from "react";

export default function App() {
  const [state, setState] = useState({
    value: null,
    lengthOfFirstNumber: 3,
    lengthOfSecondNumber: 2,
    firstNumber: 0,
    secondNumber: 0,
    firstNumber: 0,
    secondNumber: 0,
    answer: 0,
    mode: "subtract", // add,subtract,multiply,devide
  });

  const {
    lengthOfFirstNumber,
    lengthOfSecondNumber,
    mode,
    firstNumber,
    secondNumber,
    answer,
  } = state;

  useEffect(() => {
    mathGenerator();
  },[]);

  function getRandomArbitrary(length) {return Math.floor(Math.random() * (10 ** length - 1) + 1);}

  function mathGenerator() {
    var first = getRandomArbitrary(lengthOfFirstNumber);
    var second = getRandomArbitrary(lengthOfSecondNumber);
    var result = 0

    switch(mode) {
      case 'add':result = first+second
      break;
      case "subtract": result = first - second
      break;
      case "multiply": result = first * second
      break;
      case "divide": result = first / second
    }

    setState({
      ...state,
      firstNumber: first,
      secondNumber: second,
      answer:result
    });
  }

  return (
    <div className="App">
      <button
        onClick={() => {
          mathGenerator();
        }}
      >
        Make new integer
      </button>
      <h1>
        {firstNumber}
      </h1>
      <h1>
        {secondNumber}
      </h1>

      <h1>{answer}</h1>
    </div>
  );
};