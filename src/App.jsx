import "./styles/App.css";
import Control from "./components/Control";
import AddUser from "./components/AddUser";
import UserItem from "./components/UserItem";

import { ThemeProvider, createTheme } from "@mui/material";
import { Route, Routes } from "react-router-dom";



const App = () => {
  const theme = createTheme({
    palette: { mode: "dark" },
  });
  return (
    <>
      <ThemeProvider theme={theme}>
        <main>
          <Routes>
            <Route path="/" element={<Control />} />
            <Route path="/users/:id" element={<UserItem />} />
            <Route path="/add" element={<AddUser />} />
          </Routes>
        </main>
      </ThemeProvider>
    </>
  );
};

export default App;
