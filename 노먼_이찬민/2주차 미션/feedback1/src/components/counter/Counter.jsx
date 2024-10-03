import React, { useState } from "react";
import { Container } from "./Counter.style";

function Counter(props) {
  const { count } = props;
  return (
    <Container>
      <h1>Count: {count}</h1>
    </Container>
  );
}

export default Counter;
