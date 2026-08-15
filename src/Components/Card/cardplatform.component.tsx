import { State } from "../../types.ts";
import { Spinplatform } from "./card.styles.tsx";
import Card from "./card.component.tsx";
// import { CardBack } from "./card.styles";
import Back from "./cardback.component.tsx";

type SpinnerProps = {
    state:State;
    // setState: () => void;
    setState: React.Dispatch<React.SetStateAction<State>>;
    mathGenerator: () => void;
    getRandomArbitrary: (length:number) => void;
};

export const Spinner = (props: SpinnerProps) => {
    const {
        state,
        setState,
        mathGenerator,
        getRandomArbitrary
    } = props
    const { showAnswer,calculation,answer } = state

    return(
        <Spinplatform
            showAnswer={showAnswer}
            // answer={answer}
            // calculation={Number(calculation)}
            solved={Number(calculation) === answer}
        >
            <Card
                state={state}
                setState={setState}
                mathGenerator={mathGenerator}
                getRandomArbitrary={getRandomArbitrary}
            />
            <Back
                state={state}
                mathGenerator={mathGenerator}
            />
        </Spinplatform>
    )
}