import styled from "styled-components"

export const BaseButton = styled.button`
    position:relative;
    border-radius:10px;
    overflow:hidden;
    z-index:0;
    border: 1px solid #c4c4c4;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;

    &:hover {
        overflow:visible;
        z-index:1;
        box-shadow: inset 0 0 5px #555;
    }

`