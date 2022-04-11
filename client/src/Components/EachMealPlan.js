import React from 'react'
import {Container} from "react-bootstrap"

function EachMealPlan({eachPlan}) {
console.log(eachPlan.title)
  return (
    <Container>
      <div>EachMealPlan</div>
      <p>Title: {eachPlan.title} </p>
    </Container>
  );
}

export default EachMealPlan