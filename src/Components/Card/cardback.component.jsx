import { CardBack,NextButton } from "./card.styles";
import { BlockMath } from "react-katex";

const Back = ({state,mathGenerator}) => {
    const { showAnswer,calculation,answer } = state
    return(
        <CardBack 
            showAnswer={showAnswer}
        >
            <BlockMath math={String(answer)}/>
            <NextButton onClick={() => mathGenerator()}>{`Next >>`}</NextButton>
            {answer === Number(calculation) && <strong>CORRECT!</strong>}
        </CardBack>
    )
}

export default Back