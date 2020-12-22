import './App.css';
import NavBar from "./components/NavBar/NavBar";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Search from "./pages/search";
import Saved from "./pages/saved";


function App() {
  return (
    <Router>
      <NavBar />
      <div className="App">
        <Switch>
          <Route exact path="/" component={Search} />
          <Route exact path="/saved" component={Saved} />
        </Switch>
      </div>

    </ Router>
  );
}

export default App;
