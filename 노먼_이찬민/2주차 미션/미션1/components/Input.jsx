import React from "react";
import styled from "styled-components";

const MyInput = styled.input`
  width: 70%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;

  &:hover {
    border-color: #888; /* hover 시 테두리 색상 */
  }
`;

function Input(props) {
  const { value, onChange } = props;
  console.log(value, onChange);
  return <MyInput type="text" value={value} onChange={onChange}></MyInput>;
}

export default Input;
