import './App.css';
import NavBar from "./components/NavBar/NavBar";
import { BrowserRouter as Router} from "react-router-dom";


function App() {
  return (
    <Router>
    <div className="App">
      <NavBar />
      <h1>Hello from App!</h1>
    </div>
    </ Router>
  );
}

export default App;
