import "./App.css";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import { AuthoContextProvider } from "./components/context/AuthContext";

function App() {
  return (
    <>
      <AuthoContextProvider>
        <Navbar />
        <Outlet />
      </AuthoContextProvider>
    </>
  );
}

export default App;
