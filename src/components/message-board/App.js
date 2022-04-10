import { useEffect, useState, useRef } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./GlobalStyle";
import CommentItem from "./CommentItem";
import CommentPanel from "./CommentPanel";
import ErrorMessage from "./ErrorMessage";
import styled from "styled-components";
import LoadingOverlay from "react-loading-overlay";

const API_ENDPOINT = "https://student-json-api.lidemy.me/comments";

const StyledLoader = styled(LoadingOverlay)`
  & > ._loading_overlay_overlay {  
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
`;

const EmptyMessage = styled.div`
  text-align: center;
  color: ${({ theme }) => theme.gray};
  margin: 20px 0;
`;

const theme = {
  blue: "#5356B2",
  gray: "#888",
};

export default function App() {
  const [comments, setComments] = useState(null);
  const [apiGetError, setApiGetError] = useState(null);
  const [apiPostError, setApiPostError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // 取得所有留言
  const fetchComments = useRef(async function () {
    try {
      const res = await fetch(`${API_ENDPOINT}?_sort=id&_order=desc&_limit=5`);
      const json = await res.json();
      setComments(json);
      setIsLoading(false);
    } catch (err) {
      setApiGetError(err);
      setIsLoading(false);
    }
  });

  useEffect(() => {
    setIsLoading(true);
    fetchComments.current();
  }, []);

  const handleAddComment = async (body) => {
    setIsLoading(true);
    try {
      const res = await fetch(API_ENDPOINT, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          nickname: "PeaNu",
          body,
        }),
      });
      const { ok, message } = await res.json();
      if (ok === 0) {
        setIsLoading(false);
        return setApiPostError(message);
      }
      fetchComments.current();
    } catch (err) {
      setApiPostError(err);
      setIsLoading(false);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />

      
      <StyledLoader
        active={isLoading}
        spinner={true}
        text="Loading your content..."
      ></StyledLoader>

      <CommentPanel
        handleAddComment={handleAddComment}
        setApiPostError={setApiPostError}
      />
      <ErrorMessage apiGetError={apiGetError} apiPostError={apiPostError} />

      {comments && comments.length === 0 && (
        <EmptyMessage>No message....</EmptyMessage>
      )}

      {comments &&
        comments.map(({ id, nickname, body, createdAt }) => (
          <CommentItem
            key={id}
            nickname={nickname}
            body={body}
            createdAt={createdAt}
          />
        ))}
    </ThemeProvider>
  );
}
