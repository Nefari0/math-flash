import 'katex/dist/katex.min.css';
import { OptionsContainer,OptionColumn } from "./card.styles";
import { BlockMath } from "react-katex";

const CardOptions = ({state}) => {

    const { mode, lengthOfFirstNumber, lengthOfSecondNumber } = state

    const firstArray = Array.from(Array(lengthOfFirstNumber))

    return (
        <OptionsContainer>
           
            <OptionColumn>
                <small>first number</small>
                <div>

                {firstArray.map((el,i) => {
                return (
                    <small key={i}>X</small>
                )})}
                </div>
            </OptionColumn>
         

                
            <OptionColumn>
            <small>operation</small>
                <div>
                {firstArray.map((el,i) => {
                return (
                    <small key={i}>el</small>
                )})}
                </div>
            </OptionColumn>

            <OptionColumn>
            <small>second number</small>
                <div>
                {firstArray.map((el,i) => {
                return (
                    <small key={i}>el</small>
                )})}
                </div>
            </OptionColumn>
            
        </OptionsContainer>
    )
}

export default CardOptions