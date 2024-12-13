import 'katex/dist/katex.min.css';
import { CardOutline,NextButton } from "./card.styles";
import { BlockMath } from "react-katex";
import CardOptions from './options.component';

const Card = ({state, setState, getRandomArbitrary, mathGenerator}) => { 

    const { 
        firstNumber,
        mode,
        secondNumber,
        calculation,
        cardOptionsOpen,
        answer,
        showAnswer
    } = state

    var equation = `${firstNumber}`+`${mode}`+`${secondNumber}`

    return (
        <CardOutline
            showAnswer={showAnswer}
        >
            <BlockMath math={equation}/>
            <p>= {calculation}</p>
            {cardOptionsOpen && 
                <CardOptions 
                    state={state} 
                    setState={setState} 
                    getRandomArbitrary={getRandomArbitrary} 
                    mathGenerator={mathGenerator} 
                />}
            {answer != Number(calculation) && showAnswer  === false ? 
                <NextButton 
                    onClick={() => setState({...state, showAnswer:true})}
                >
                    {`Skip >>`}
                </NextButton> : null}
        </CardOutline>
    )
}

export default Card