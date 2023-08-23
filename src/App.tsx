import './App.css'
import { CssBaseline, ThemeProvider } from "@mui/material";
import { BrowserRouter as Router,Route, Routes } from 'react-router-dom';
import { appTheme } from "./theme";
import UserForm from './userForm';
import SecondPage from './secondPage';
function App() {

  return (
    <>
      <ThemeProvider theme={appTheme}>
        <CssBaseline enableColorScheme />
        <Router>
        <div>
          <Routes>
            <Route  path="/"  Component={UserForm} />
            <Route path="/second" Component={SecondPage} />
          </Routes>
        </div>
        </Router>
      </ThemeProvider>
    </>
  )
}

export default App
