import { Spinplatform } from "./card.styles";
import Card from "./card.component";
// import { CardBack } from "./card.styles";
import Back from "./cardback.component";

export const Spinner = (props) => {
    const {
        state,
        setState,
        mathGenerator,
        getRandomArbitrary
    } = props
    const { showAnswer,calculation,answer } = state
    console.log(showAnswer)
    return(
        <Spinplatform
            showAnswer={showAnswer}
            answer={answer}
            calculation={Number(calculation)}
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