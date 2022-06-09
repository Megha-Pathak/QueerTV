import "./App.css";
import { Navbar } from "./frontend/components";
import { Sidebar } from "./frontend/components";
import { Router } from "./frontend/Router/Router";

function App() {
  return (
    <div className="app">
      <Navbar />
      <div className="app-content">
        <Sidebar />
        <Router />
      </div>
    </div>
  );
}

export default App;
