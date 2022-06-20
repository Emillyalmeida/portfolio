import { useContext } from "react";
import Routers from "./routers";
import { themes } from "./styles/theme";
import GlobalStyle from "./styles/global";
import { ThemeProvider } from "styled-components";
import { ColorContext } from "./providers/theme";
import BtnMode from "./components/btnMode";
import Nav from "./components/nav";

function App() {
  const { currentTheme } = useContext(ColorContext);

  return (
    <>
      <ThemeProvider theme={themes[currentTheme]}>
        <GlobalStyle />
        <Nav />
        <BtnMode />
        <Routers />
      </ThemeProvider>
    </>
  );
}

export default App;
