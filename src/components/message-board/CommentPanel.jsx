import styled from "styled-components";
import { useState } from "react";
import PropTypes from "prop-types";

const FormSection = styled.section`
  margin-bottom: 20px;
`;

const Form = styled.form`
  background-color: white;
  padding: 16px;
  border-radius: 8px;
  text-align: right;
`;

const Textarea = styled.textarea`
  display: block;
  width: 100%;
  border-radius: 8px;
  color: #334253;
  padding: 16px 24px;
  border-color: #e9ebf0;
  &:focus {
    outline: 0;
    box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);
  }
  margin-bottom: 20px;
`;

const SubmitButton = styled.button`
  background-color: ${({ theme }) => theme.blue};
  border: none;
  border-radius: 0.5em;
  color: white;
  text-transform: uppercase;
  padding: 12px 16px;
  cursor: pointer;
  &:hover {
    background-color: #5356b261;
  }
`;

export default function CommentPanel({ handleAddComment, setApiPostError }) {
  const [value, setValue] = useState();
  const handleTextareaChange = (e) => setValue(e.target.value);
  const handleTextareaFocus = () => setApiPostError(null);
  const handleFormSubmit = (e) => {
    e.preventDefault();
    handleAddComment(value);
    setValue("");
  };

  return (
    <FormSection>
      <Form onSubmit={handleFormSubmit}>
        <Textarea
          placeholder="Add a comment..."
          value={value}
          onChange={handleTextareaChange}
          onFocus={handleTextareaFocus}
        ></Textarea>
        <SubmitButton>Send</SubmitButton>
      </Form>
    </FormSection>
  );
}

CommentPanel.propTypes = {
  handleAddComment: PropTypes.func,
  setApiPostError: PropTypes.func,
};
