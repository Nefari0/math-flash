import { BaseButton } from "./basebutton.styles";

const Button = ({text,styles, ...otherProps}) => {

    return (
        <BaseButton
            style={styles}
            {...otherProps}
        >
                {text}
        </BaseButton>
    )
}

export default Button