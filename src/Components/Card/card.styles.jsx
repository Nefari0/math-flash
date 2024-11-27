import styled from "styled-components";

export const CardOutline = styled.div`
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
    height:50vh;
    top:35px;
    background-color:#000;
    
    display: flex;   
    flex-direction:row;
    justify-content: space-between;

    small {
        font-size:10px;
        // margin:auto;
    }
    
    // small,
    div {
        // width:33%;
        // padding:0px;
        // background-color:blue;
        //     background: #fffef0;
    }

    // small {
        //  background-color:blue;
        // width:33%;
    // }
`

export const OptionColumn = styled.div`
    width:33%;
    padding:0px;
    background: #fffef0;
    display: flex;
    flex-direction:column;
`