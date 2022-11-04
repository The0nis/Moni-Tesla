import React, { useState } from 'react'
import styled from "styled-components"
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { selectCars } from '../features/car/carSlice';
import { useSelector } from 'react-redux';

function Header() {
  const [burgerStatus, setBurgerStatus] = useState(false);
  const cars = useSelector(selectCars)
  return (
    <Container>
      <a>
         <img src="./image/logo.svg" alt='' />
      </a>
      <Menu>
        {cars && cars.map((car, index) =>(
          <p><a key={index} href="#">{car}</a></p>
        ))}
        
        {/* <p><a href="#">Model 3</a></p>
        <p><a href="#">Model X</a></p>
        <p><a href="#">Model Y</a></p> */}
        {/* <p><a href="#">Solar Roof</a></p>
        <p><a href="#">Solar Panels</a></p> */}
      </Menu>
      <RightMenu>
        <a href="#">Shop</a>
        <a href="#">Tesla Account</a>
      </RightMenu>

        <CustomMenu  onClick={()=>setBurgerStatus(true)}/>
      
      <BurgerNav show={burgerStatus}>
      
        <CloseWrapper>
          <CustomClose  onClick={()=>setBurgerStatus(false)}/>
        </CloseWrapper>
          {cars && cars.map((car, index) =>(
            <li key={index}><a href="#">{car}</a></li>
          ))}
          <li><a href="#">Existing Inventory</a></li>
          <li><a href="#">Used Inventory</a></li>
          <li><a href="#">Trade-In</a></li>
          <li><a href="#">Cybertruck</a></li>
          <li><a href="#">Roadaster</a></li>
  
      </BurgerNav>
    </Container>
  )
}

export default Header

const Container = styled.div`
  min-height = 60px;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
`

const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: 1; 
  flex: 1;

  a {
    font-weight: 600;
    margin: 0 auto;
    align: center;
    padding-left: 40px;
    cursor: pointer;
    flex-wrap: no-wrap;
    justify-content: center;
    align-items: center;

    @media (max-width: 830px) {
      display: none;
    }
  
`

const RightMenu = styled.div`
    display: flex;
    align-items:center;
a {
  font-weight: 600;
  text-transform: uppercase;
  cursor: pointer;
  margin-right: 30px;
}
`

const CustomMenu = styled(MenuIcon)`
  cursor: pointer;
`

const BurgerNav = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background: white;
  width: 250px; 
  z-index: 16;
  list-style: none;
  padding: 16px;
  display: flex;
  flex-direction: column; 
  text-align: start;
  transform: ${props => props.show ? 'translateX(0)': 'translateX(100%)'};
  transistion: transform 0.7s;
  li {
    padding: 15px 0;
    border-bottom: 1px solid rgba(0, 0, 0, .2);
    a{
      font-weight: 600;
    }

  }
`


const CloseWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`

const CustomClose = styled(CloseIcon)`
  cursor: pointer;

`