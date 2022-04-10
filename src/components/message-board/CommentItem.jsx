import avatar from "../../assets/PeaNu.jpg";
import styled from "styled-components";
import PropTypes from "prop-types";

const CommentSection = styled.section`
  & + & {
    margin-top: 20px;
  }
`;

const CommentBlock = styled.div`
  background-color: white;
  padding: 16px;
  border-radius: 8px;
`;

const CommentHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`;

const CommentAvatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  object-position: center;
  margin-right: 1em;
`;

const CommentBadge = styled.div`
  margin-right: 1.5em;
  padding: 4px 6px;
  color: white;
  background-color: ${({ theme }) => theme.blue};
  line-height: 1;
  vertical-align: middle;
  font-size: 0.9em;
  font-weight: bold;
  border-radius: 2px;
`;

const CommentAuthor = styled.div`
  margin-right: 0.5em;
  max-width: 10em;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const CommentTimeAgo = styled.div`
  margin-left: auto;
  color: ${({ theme }) => theme.gray};
`;
const CommentContent = styled.div`
  white-space: pre-line;
  word-break: break-word;
`;

export default function CommentItem({ nickname, createdAt, body }) {
  return (
    <CommentSection>
      <CommentBlock>
        <CommentHeader>
          <CommentAvatar src={avatar}></CommentAvatar>
          <CommentAuthor>{nickname}</CommentAuthor>
          <CommentBadge>you</CommentBadge>
          <CommentTimeAgo>
            {new Date(createdAt).toLocaleString()}
          </CommentTimeAgo>
        </CommentHeader>
        <CommentContent>{body}</CommentContent>
      </CommentBlock>
    </CommentSection>
  );
}

CommentItem.propTypes = {
  nickname: PropTypes.string,
  createdAt: PropTypes.number,
  body: PropTypes.string,
};
