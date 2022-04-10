import PropTypes from "prop-types";
import styled from "styled-components";

const ErrorText = styled.div`
  text-align: center;
  color: crimson;
  line-height: 1.5;
  margin: 20px 0;
`;

export default function ErrorMessage({ apiGetError, apiPostError }) {
  if (apiGetError) {
    return (
      <ErrorText>
        Something went wrong! <br />
        {apiGetError.toString()}
      </ErrorText>
    );
  }
  if (apiPostError) {
    return (
      <ErrorText>
        Something went wrong! <br />
        {apiPostError.toString()}
      </ErrorText>
    );
  }
  return null;
}

ErrorMessage.propTypes = {
  apiGetError: PropTypes.object,
  apiPostError: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
};
