import { BaseButton } from "./basebutton.styles.tsx";
import { ReactNode } from "react";

type ButtonProps = {
    text: ReactNode;
    styles?: { [key: string]: string };
    onClick: (e:React.MouseEvent<HTMLButtonElement>) => void;
};

const Button = ({text,styles, ...otherProps}: ButtonProps) => {

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