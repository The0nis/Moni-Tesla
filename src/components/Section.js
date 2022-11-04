import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade';

function Section({ title, description, leftBtnText, rightBtnText, backgroundImg}) {
  return (
    <Wrap bgImage={backgroundImg} >
      <Fade bottom>
        <ItemText>
          <h1>{ title}</h1>
          <p>{ description}</p>
        </ItemText>
      </Fade>

      <Buttonis>
      <Fade bottom>
          <ButtonGroup>
            <LeftButton>
              { leftBtnText}
            </LeftButton>

            { rightBtnText && 
              <RightButton>
                { rightBtnText}
              </RightButton>
            
            }
          </ButtonGroup>
        </Fade>
        <DownArrow src="./image/arrow.svg"/>
      </Buttonis>
    </Wrap>
  )
}

export default Section


const Wrap = styled.div`
    width: 100vw;
    height: 100vh;
    background-image: url(../image/one.jpg);
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background-image: ${props => `url("/image/${props.bgImage}")`}

    `
const ItemText = styled.div`
    padding-top: 15vh;
    text-align: center;
`


const ButtonGroup = styled.div`
  display: flex;
  margin-buttom: 30px;
  @media (max-width: 768px) {
    flex-direction: column;
  }

`


const RightButton = styled.div`
  background-color: gray;
  height: 40px;
  width: 256px;
  background: white;
  opacity: 0.8;
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  text-transform: uppercase;
  font-size: 12px;
  cursor: pointer;
  margin: 8px;

`

const LeftButton = styled(RightButton)`
  background-color: rgba(23, 26, 32, 0.8);
  opacity: 0.85;
  color: white;

`

const DownArrow = styled.img`
  margin-top: 20px;
  height: 40px;
  animation: animationDown infinite 1.2s;
  overflow-x: hidden;
  overflow-y: hidden;
`

const Buttonis = styled.div`
  opacity: 0.85;
  cursor: pointer;
`