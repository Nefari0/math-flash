import 'katex/dist/katex.min.css';
import { CardOutline } from "./card.styles";
import { BlockMath } from "react-katex";
import CardOptions from './options.component';

const Card = ({state}) => { 

    const { firstNumber,mode,secondNumber,calculation,cardOptionsOpen } = state

    var equation = `${firstNumber}`+`${mode}`+`${secondNumber}`

    return (
        <CardOutline>
            <BlockMath math={equation}/>
            <p>= {calculation}</p>
            {cardOptionsOpen && <CardOptions state={state} />}
        </CardOutline>
    )
}

export default Card