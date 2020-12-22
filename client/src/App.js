import './App.css';
import NavBar from "./components/NavBar/NavBar";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Search from "./pages/search";


function App() {
  return (
    <Router>
      <NavBar />
      <div className="App">
        <Switch>
          <Route exact path="/" component={Search} />
        </Switch>
      </div>

    </ Router>
  );
}

export default App;
