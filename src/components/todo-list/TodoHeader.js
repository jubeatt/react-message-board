import styled from "styled-components";
import defaultButton from "./commonStyle";
import { useInput } from "../../custom-hooks/useInput";
import PropTypes from "prop-types";

const TodoHeaderWrapper = styled.div`
  margin-bottom: 30px;
`;

const TodoInputBlock = styled.form`
  display: flex;
  align-items: center;
`;

const Input = styled.input`
  width: 100%;
  margin-right: 20px;
  border-radius: 4px;
  border: 1px solid #c7c7c7;
  padding: 8px;

  &:focus {
    outline: 0;
    box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);
  }
`;

const BlueButton = styled.button`
  ${defaultButton}
  border-color: ${({ theme }) => theme.blue};
  color: ${({ theme }) => theme.blue};
  &:hover {
    background-color: ${({ theme }) => theme.blue};
    color: white;
  }
`;

export default function TodoHeader({ handleAddTodo }) {
  const { inputValue, setInputValue, handleInput } = useInput();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue) {
      handleAddTodo(inputValue);
      setInputValue("");
    }
  };

  return (
    <TodoHeaderWrapper onSubmit={handleSubmit}>
      <TodoInputBlock>
        <Input value={inputValue} onChange={handleInput}></Input>
        <BlueButton>送出</BlueButton>
      </TodoInputBlock>
    </TodoHeaderWrapper>
  );
}

// propTypes 是小寫
TodoHeader.propTypes = {
  handleAddTodo: PropTypes.func,
};
