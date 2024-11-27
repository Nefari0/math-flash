import 'katex/dist/katex.min.css';
import { CardOutline } from "./card.styles";
import { BlockMath } from "react-katex";
import CardOptions from './options.component';

const Card = ({state, setState, getRandomArbitrary, mathGenerator}) => { 

    const { firstNumber,mode,secondNumber,calculation,cardOptionsOpen,answer } = state

    var equation = `${firstNumber}`+`${mode}`+`${secondNumber}`

    return (
        <CardOutline>
            <BlockMath math={equation}/>
            <p>= {calculation}</p>
            {cardOptionsOpen && <CardOptions state={state} setState={setState} getRandomArbitrary={getRandomArbitrary} mathGenerator={mathGenerator} />}

            <small 
                style={{
                    position:'absolute',
                    right:'40px',
                    bottom:'10px',
                    zIndex:'0'
                }} 
                onClick={() => mathGenerator()}
            >
                    {answer === Number(calculation) ? 'Next >>' : 'Skip >>'}
            </small>

            {answer === Number(calculation) && <strong>CORRECT!</strong>}

        </CardOutline>
    )
}

export default Card