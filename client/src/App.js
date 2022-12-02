import { BrowserRouter, Navigate, Routes, Route } from 'react-router-dom';
import Home from 'pages/homePage/Home';
import Login from 'pages/loginPage/Login';
import Profile from 'pages/profilePage/Profile';
import {useMemo} from "react";
import {useSelector} from "react-redux";
import {CssBaseline, ThemeProvider} from "@mui/material";
import {createTheme} from "@mui/material/styles";
import {themeSettings} from "./theme";


function App() {

  const mode = useSelector((state) => state.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  return (
    <div className="App">
      <BrowserRouter>
       <ThemeProvider theme={theme}>
        <CssBaseline/>
        <Routes>
          <Route path="/" exact element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/profile/:userId" element={<Profile />} />
        </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
