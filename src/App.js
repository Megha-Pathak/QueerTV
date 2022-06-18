import "./App.css";
import { Navbar } from "./frontend/components";
import { Sidebar } from "./frontend/components";
import { Router } from "./frontend/Router/Router";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div className="app">
      <ToastContainer theme="colored" autoClose={1000} position="bottom-left" />
      <Navbar />
      <div className="app-content">
        <Sidebar />
        <Router />
      </div>
    </div>
  );
}

export default App;
