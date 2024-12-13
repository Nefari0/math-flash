import styled from "styled-components";
const rotation = 180 // Flip card angle
const displacement = 2 // Space between card back and front
const relativeAngle = 90 // Angle between platform and card

export const Spinplatform = styled.div`
  -webkit-transform-style: preserve-3d;
    width:200px;
    height:200px;
    position:absolute;
    top:20%;
    transition: all 500ms;
    transform:
        translateY(${displacement}px)
        rotateY(${({showAnswer,solved}) => !solved & !showAnswer ? '0' : rotation}deg)
        rotateX(${relativeAngle}deg);
    display:flex;
    flex-direction:colomn;
    justify-content:center;
    align-items:center;
`

export const CardOutline = styled.div`
    position:absolute;
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
    transform:translateZ(${displacement}px)
    rotateX(-${relativeAngle}deg);
`
    
export const CardBack = styled(CardOutline)`
    transform:
    translateY(${-1}px)
    rotateX(-${90}deg)
    rotateY(-${180}deg);
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