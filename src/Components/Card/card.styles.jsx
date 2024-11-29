import styled from "styled-components";

export const CardOutline = styled.div`
    position:absolute;
    top:20px;
    width:70vw;
    max-width:400px;
    min-width:250px;
    height:50vh;
    border-radius:5px;
    font-size:2.1em;
    display-flex;
    flex-direction:columm;
    overflow-wrap: break-word;
    box-shadow: 2px 3px 20px black, 0 0 60px #8a4d0f inset;
    background: #fffef0;
    `

export const OptionsContainer = styled.section`
    position:absolute;
    width:70vw;
    max-width:400px;
    min-width:250px;
    height:30vh;
    bottom:0px;
    background-color:#000;
    z-index:1;
    
    display: flex;   
    flex-direction:row;
    justify-content: space-between;

    small {
        font-size:10px;
    }

    span {
        font-size:20px;
    }
`

export const OptionColumn = styled.div`
    width:33%;
    padding:0px;
    background: #fffef0;
    display: flex;
    flex-direction:column;
`

export const NextButton = styled.small`
    position:absolute;
    right:40px;
    bottom:10px;
    zIndex:0;
`