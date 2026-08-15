import { AppContainer } from "./App.styles.jsx";
import { useState, useEffect } from "react";
import NumberPad from './Components/NumberPad/num.component.tsx';
import { Spinner } from "./Components/Card/cardplatform.component.tsx";
import { State } from './types.ts'

const App = () => {
  const [state, setState] = useState<State>({
    value: null,
    lengthOfFirstNumber: 1,
    lengthOfSecondNumber: 1,
    firstNumber: 0,
    secondNumber: 0,
    answer: 0, // Actual answer
    calculation:'', // User calculation
    mode: "+", // "+", "-", "\\times", "\\div"
    cardOptionsOpen:false,
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

  function getRandomArbitrary(length: number): number {
    return Math.floor(
      Math.random() * (9 * 10 ** (length - 1))
    ) + 10 ** (length - 1);
  }

  function generateDivision(
    dividendDigits: number,
    divisorDigits: number
  ) {
    const effectiveDividendDigits =
      Math.max(dividendDigits, divisorDigits);

    const maxDividend = 10 ** effectiveDividendDigits - 1;
    const minDividend = 10 ** (effectiveDividendDigits - 1);

    const divisor = getRandomArbitrary(divisorDigits);

    const minQuotient = Math.max(
      1,
      Math.ceil(minDividend / divisor)
    );

    const maxQuotient = Math.floor(maxDividend / divisor);

    const quotient =
      Math.floor(
        Math.random() * (maxQuotient - minQuotient + 1)
      ) + minQuotient;

    const dividend = quotient * divisor;

    return {
      firstNumber: dividend,
      secondNumber: divisor,
      answer: quotient
    };
  }

  function mathGenerator() {
    let first = getRandomArbitrary(lengthOfFirstNumber);
    let second = getRandomArbitrary(lengthOfSecondNumber);
    var result = 0

    switch(mode) {
      case '+':result = first+second
      break;
      case "-": result = first - second
      break;
      case "\\times": result = first * second
      break;
      case "\\div": {
        const division = generateDivision(
          lengthOfFirstNumber,
          lengthOfSecondNumber
        );

        first = division.firstNumber;
        second = division.secondNumber;
        result = division.answer;

      break;  
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
      />
      
      {Number(calculation) !== answer && showAnswer != true && cardOptionsOpen != true &&
      
      <NumberPad
        styles={{position:'relative'}}
        state={state}
        setState={setState}
        inputField={'calculation'}
      />}
    </AppContainer>
  );

};

export default App