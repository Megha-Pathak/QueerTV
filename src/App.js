import "./App.css";
import { Header, Main, Sidebar } from "./frontend/layouts";

function App() {
  return (
    <div className="app">
      <Header />
      <div className="app-content">
        <Sidebar />
        <Main />
      </div>
    </div>
  );
}

export default App;
