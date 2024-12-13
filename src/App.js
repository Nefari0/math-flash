import { AppContainer,Three } from "./App.styles";
import { useState, useEffect } from "react";
import NumberPad from './Components/NumberPad/num.component';
import { Spinner } from "./Components/Card/cardplatform.component";

export default function App() {
  const [state, setState] = useState({
    value: null,
    lengthOfFirstNumber: 1,
    lengthOfSecondNumber: 1,
    firstNumber: 0,
    secondNumber: 0,
    firstNumber: 0,
    secondNumber: 0,
    answer: 0, // Actual answer
    calculation:'', // User calculation
    mode: "+", // "+", "-", "\\times", "\\div"
    cardOptionsOpen:false,
    flipcard:false,
    showAnswer:false
  });

  const {
    lengthOfFirstNumber,
    lengthOfSecondNumber,
    mode,
    answer,
    calculation,
    cardOptionsOpen,
    showAnswer
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
      case "\\div": {
        result = first
        first = first * second
      }
    }

    setState({
      ...state,
      firstNumber: first,
      secondNumber: second,
      answer:result,
      calculation:'',
      cardOptionsOpen:false,
      showAnswer:false,
    });
  }

  return (
    <AppContainer>
      <Spinner
        state={state}
        setState={setState}
        mathGenerator={mathGenerator}
        getRandomArbitrary={getRandomArbitrary}
        showAnswer={showAnswer}
      />
      
      {Number(calculation) != answer && cardOptionsOpen != true &&
      
      <NumberPad
        styles={{position:'relative'}}
        state={state}
        setState={setState}
        inputField={'calculation'}
      />
    }
    </AppContainer>
  );

};