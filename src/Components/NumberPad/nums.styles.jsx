import styled from "styled-components";

export const NumPad = styled.div`
    bottom:-150px;
    width:150px;
    height:200px;
    padding:10px;
    position:absolute;

    @media (max-height:1200px) {
        bottom:-200px;
    }

    button {
        width:32%;
        height:24%;
        margin:.5% .5% .5% .5%;
        font-size:35px;
    }
`