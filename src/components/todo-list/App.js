import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./GlobalStyle";
// eslint-disable-next-line no-unused-vars
import TodoApp from "./TodoApp";
// eslint-disable-next-line no-unused-vars
import TodoAppClass from "./TodoAppClass";

const theme = {
  blue: "royalblue",
  orange: "darkorange",
  green: "mediumseagreen",
  red: "palevioletred",
};

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <TodoApp />
    </ThemeProvider>
  );
}
