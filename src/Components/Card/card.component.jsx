import 'katex/dist/katex.min.css';
import { CardOutline } from "./card.styles";
import { BlockMath } from "react-katex";

const Card = ({state}) => { 

    const { firstNumber,mode,secondNumber,calculation } = state

    var equation = `${firstNumber}`+`${mode}`+`${secondNumber}`

    return (
        <CardOutline>
            <BlockMath math={equation}/>
            {/* <BlockMath math={`=`+calculation}/> */}
            <p>= {calculation}</p>
        </CardOutline>
    )
}

export default Card