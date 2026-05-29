import styled from "styled-components";
import background_image_classroom from './background_image_classroom.png'

const rotation = 180

export const AppContainer = styled.main`
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 99.99vh;
  width: 100vw;

  background-image:
    linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)),
    url(${background_image_classroom});

  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;