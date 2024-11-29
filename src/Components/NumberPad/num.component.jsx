import { useEffect, useState } from "react";
import { NumPad } from "./nums.styles";
import { numdata } from "./nums.data";
import { Wrench } from "../SVG/svg";
import Button from "../Buttons/basebutton.component";

const NumberPad = ({styles,state,setState,inputField}) => {

    const [input,setInput] = useState('calculation') // -- Selects text input body to be edited
    const { cardOptionsOpen,mode } = state

    useEffect(() => {
        if (inputField) {setInput(inputField)}
    },[inputField])

    function newCharacter(val) {
        const stringval = state[input].toString()
        const mathArr = stringval.split('')
        const previous = mathArr.splice(0,mathArr.length-1,1).join('')
        return (val.split('').length === 0 ? previous : state[input]+val)
    }

    function setItems(e,val) {
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