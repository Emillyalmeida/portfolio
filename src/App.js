import { useContext } from "react";
import Routers from "./routers";
import { themes } from "./styles/theme";
import GlobalStyle from "./styles/global";
import { ThemeProvider } from "styled-components";
import { ColorContext } from "./providers/theme";

function App() {
  const { currentTheme } = useContext(ColorContext);

  return (
    <>
      <ThemeProvider theme={themes[currentTheme]}>
        <GlobalStyle />
        <Routers />
      </ThemeProvider>
    </>
  );
}

export default App;
