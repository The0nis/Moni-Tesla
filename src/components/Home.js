import React from 'react'
import styled from "styled-components"
import Section from './Section'

function Home() {
  return (
    // <Container>
    //     <Section />
    // </Container>
    <div>
        < Section 
          title= "Model S"
          description="Order Online for Touchless Delivery"
          backgroundImg="one.jpg"
          leftBtnText="Custom Order"
          rightBtnText="Existing Inventory"
        />
        < Section 
          title= "Model Y"
          description="Order Online for Touchless Delivery"
          backgroundImg="two.jpg"
          leftBtnText="Custom Order"
          rightBtnText="Existing Inventory"
        />
        < Section 
          title= "Model Z"
          description="Order Online for Touchless Delivery"
          backgroundImg="three.jpg"
          leftBtnText="Custom Order"
          rightBtnText="Existing Inventory"
        />
         < Section 
          title= "Solar Panels"
          description="Lowest Cost Solar Panels in America"
          backgroundImg="six.jpg"
          leftBtnText="Custom Order"
          //rightBtnText="Existing Inventory"
        />
        < Section 
          title= "Lower Cost Solar Panel"
          description="Order Online for Touchless Delivery"
          backgroundImg="four.jpg"
          leftBtnText="Custom Order"
          rightBtnText="Existing Inventory"
        />
    </div>
  )
}

export default Home

// const Container = styled.div