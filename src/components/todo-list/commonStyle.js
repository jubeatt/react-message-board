import { css } from "styled-components";

const defaultButton = () => css`
  border-radius: 4px;
  padding: 8px 12px;
  background-color: transparent;
  border: 1px solid black;
  color: black;
  cursor: pointer;
  flex-shrink: 0;

  &:hover {
    background-color: black;
    color: white;
  }
`;

export default defaultButton;
