import styled from "styled-components";
const Button = styled.button`
  background: #1fb6ff;
  border: none;
  border-radius: 2px;
  color: #ffffff;
  cursor: pointer;
  display: inline-block;
  font-size: 16px;
  line-height: 40px;
  font-weight: 200;
  margin: 8px 0;
  outline: none;
  padding: 0 12px;
  text-transform: uppercase;
  transition: all 300ms ease;
  &:hover {
    background: #009eeb;
  }
`;
export default Button;
