import './App.css';
import { createTheme, CssBaseline, PaletteMode, ThemeProvider } from "@mui/material";
import Home from './Containers/Home';
import { useState, useMemo } from 'react';
import { darkTheme } from "./Themes/dark";
import { lightTheme } from "./Themes/light";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { ColorContext } from "./ColorContext";
import MyThree from './Components/MyThree';
import Test from './Containers/Test';
import Thesuarus from './Containers/Thesuarus';
import Counter from './Containers/counter';
import { SwitchModeButton } from './Components/SwitchModeButton';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "contact",
    element: <MyThree />,
  },
  {
    path: "test",
    element: <Test />,
  },
  {
    path: "test2",
    element: <Thesuarus />,
  },

  {
    path: "Counter",
    element: <Counter initalCount={0} />,
  }
]);

function App() {
  const [mode, setMode] = useState("dark");

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) =>
          prevMode === "light" ? "dark" : "light"
        );
      },
    }),
    []
  );

  const theme = useMemo(
    () => createTheme(mode === "light" ? lightTheme : darkTheme),
    [mode]
  );
  
  return (
    <div className="App">
      <ColorContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline enableColorScheme />
        <SwitchModeButton />
        <RouterProvider router={router} />
      </ThemeProvider>
      </ColorContext.Provider>
    </div>
  );
}

export default App;
