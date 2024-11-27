import 'katex/dist/katex.min.css';
import { AppContainer } from "./App.styles";
import { InlineMath } from "react-katex";
import { useState, useEffect } from "react";

export default function App() {
  const [state, setState] = useState({
    value: null,
    lengthOfFirstNumber: 2,
    lengthOfSecondNumber: 1,
    firstNumber: 0,
    secondNumber: 0,
    firstNumber: 0,
    secondNumber: 0,
    answer: 0,
    mode: "/", // +,-,\\times,/
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
      case '+':result = first+second
      break;
      case "-": result = first - second
      break;
      case "\\times": result = first * second
      break;
      case "/": result = first / second
    }

    setState({
      ...state,
      firstNumber: first,
      secondNumber: second,
      answer:result
    });
  }

  var equation = `${firstNumber}`+`${mode}`+`${secondNumber}`

  return (
    <AppContainer>
      <button onClick={() => {mathGenerator();}}>
        Make new integer
      </button>
      <InlineMath
        math={`${equation}`}
      />
      <h1>{answer}</h1>
    </AppContainer>
  );
};