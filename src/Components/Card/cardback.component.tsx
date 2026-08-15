import { CardBack,NextButton } from "./card.styles.tsx";
import { BlockMath } from "react-katex";

type BackState = {
    showAnswer: boolean;
    calculation: string | number;
    answer: number;
}

type BackProps = {
    state: BackState;
    mathGenerator: () => void;
};

const Back = ({state,mathGenerator}: BackProps) => {
    const { calculation,answer } = state
    return(
        <CardBack>
            <BlockMath math={String(answer)}/>
            <NextButton onClick={() => mathGenerator()}>{`Next >>`}</NextButton>
            {answer === Number(calculation) && <strong>CORRECT!</strong>}
        </CardBack>
    )
}

export default Back