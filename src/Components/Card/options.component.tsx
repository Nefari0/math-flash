import 'katex/dist/katex.min.css';
import { OptionsContainer,OptionColumn } from "./card.styles.tsx";
import { InlineMath } from "react-katex";
import Button from '../Buttons/basebutton.component.tsx';

type CardState = {
  mode: string;
  lengthOfFirstNumber: number;
  lengthOfSecondNumber: number;
  firstNumber?: number;
  secondNumber?: number;
};

type CardOptionsProps = {
  state: CardState;
  setState: React.Dispatch<React.SetStateAction<CardState>>;
  getRandomArbitrary: (length: number) => number;
  mathGenerator: () => void;
};

const CardOptions = ({state,setState,getRandomArbitrary,mathGenerator }: CardOptionsProps) => {

    const { mode, lengthOfFirstNumber, lengthOfSecondNumber } = state

    const firstArray = Array.from(Array(lengthOfFirstNumber))
    const secondArray = Array.from(Array(lengthOfSecondNumber))
    const numberArray = [1,2,3]
    const operationArray = [ "+", "-", "\\times", "\\div"]

    function inputHandler(
        prop: "mode",
        val: string
    ): void;

    function inputHandler(
        prop: "lengthOfFirstNumber" | "lengthOfSecondNumber",
        val: number,
        resetVal: "firstNumber" | "secondNumber"
    ): void;

    function inputHandler(
        prop: keyof CardState,
        val: string | number,
        resetVal?: keyof CardState
    ) {
        if (resetVal) {
            setState({
                ...state,
                [prop]: val,
                [resetVal]: getRandomArbitrary(Number(val))
            });
        } else {
            setState({
                ...state,
                [prop]: val
            });
        }
    }

    return (
        <OptionsContainer>
           
            <OptionColumn>
                <small>first number</small>

                <div>
                    {firstArray.map((el,i) => {
                    return (
                        <InlineMath key={i} math={"\\bullet"}/>
                    )})}
                </div>

                {numberArray.map((el,i) => {
                    return (
                        <button key={i} onClick={() => {inputHandler("lengthOfFirstNumber",el,"firstNumber")}}>{el}</button>
                    )
                })}

            </OptionColumn>
         

                
            <OptionColumn>
            <small>operation</small>
                <div>
                    <InlineMath math={mode} />
                </div>
                    {operationArray.map((el,i) => {
                    return (
                        <button key={i} onClick={() => {inputHandler("mode",el)}}><InlineMath math={el} /></button>
                    )
                })}
            </OptionColumn>

            <OptionColumn>
                <small>second number</small>

                <div>   
                    {secondArray.map((el,i) => {
                    return (
                        <InlineMath key={i} math={"\\bullet"}/>
                    )})}
                </div>

                {numberArray.map((el,i) => {
                    return (
                        <button key={i} onClick={() => {inputHandler("lengthOfSecondNumber",el,"secondNumber")}}>{el}</button>
                    )
                })}

            <Button
                text={'close'}
                onClick={() => mathGenerator()}
            />
            </OptionColumn>


        </OptionsContainer>
    )
}

export default CardOptions