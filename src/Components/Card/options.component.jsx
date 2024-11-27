import 'katex/dist/katex.min.css';
import { OptionsContainer,OptionColumn } from "./card.styles";
import { InlineMath } from "react-katex";
import Button from '../Buttons/basebutton.component';

const CardOptions = ({state,setState,getRandomArbitrary,mathGenerator }) => {

    const { mode, lengthOfFirstNumber, lengthOfSecondNumber, cardOptionsOpen, } = state

    const firstArray = Array.from(Array(lengthOfFirstNumber))
    const secondArray = Array.from(Array(lengthOfSecondNumber))
    const numberArray = [1,2,3]
    const operationArray = [ "+", "-", "\\times", "/"]

    function inputHandler(prop,val,resetVal) {
        setState({
            ...state,
            [prop]:val,
            [resetVal]:getRandomArbitrary(val)
        })
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