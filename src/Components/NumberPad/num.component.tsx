import { useEffect, useState } from "react";
import { NumPad } from "./nums.styles.jsx";
import { numdata } from "./nums.data.ts";
import { Wrench } from "../SVG/svg.js";
import Button from "../Buttons/basebutton.component.tsx";
import { State } from "../../types.ts";

type InputField = {
  [K in keyof State]: State[K] extends string ? K : never
}[keyof State];

type NumberPadProps = {
    styles?: React.CSSProperties;
    inputField?: InputField;
    setState:React.Dispatch<React.SetStateAction<State>>;
    state: State;
};

const NumberPad = ({styles,state,setState,inputField}: NumberPadProps) => {

    const [input,setInput] = useState<InputField>('calculation') // -- Selects text input body to be edited
    const { cardOptionsOpen,mode } = state

    useEffect(() => {
        if (inputField) {setInput(inputField)}
    },[inputField])

    function newCharacter(val: string | number): string {
        const stringval = state[input].toString()
        const mathArr = stringval.split('')
        const previous = mathArr.splice(0,mathArr.length-1,'1').join('')

        return (val.toString().length === 0 ? previous : stringval+val)
    }

    function setItems(
        e: React.MouseEvent<HTMLButtonElement>,
        val: string | number
    ): void {
        e.preventDefault()

        setState({
            ...state,
            [input]:newCharacter(val)
        })
    }

    function negation() {
        var stringValArray = state[input].toString().split('')
        if (stringValArray[0] === '-') {
            stringValArray.splice(0,1)  
        } else {
            stringValArray.splice(0,0,'-')
        }
        setState({
            ...state,
            [input]:stringValArray.join('')
        })
    }

    const mappedKeys = numdata.map(el => {
        const display = (el.svg ? (el.svg) : (el.val))

        return (
            <Button
                key={el.val}
                onClick={(e) => setItems(e,el.val)}
                text={display}
            />
        )
    })

    return (

        <NumPad
            style={styles}
        >
            {mappedKeys}
            <Button
                onClick={() => setState({...state, cardOptionsOpen:!cardOptionsOpen})}
                text={Wrench()}
             />
            {mode === '-' && <Button text={'-'} onClick={() => negation()}/>}
        </NumPad>
    )
}

export default NumberPad