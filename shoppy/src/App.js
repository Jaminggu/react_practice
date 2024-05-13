import "./App.css";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import { AuthoContextProvider } from "./context/AuthContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();
function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <AuthoContextProvider>
          <Navbar />
          <Outlet />
        </AuthoContextProvider>
      </QueryClientProvider>
    </>
  );
}

export default App;
