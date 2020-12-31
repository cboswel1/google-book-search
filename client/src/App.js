import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SearchDisplay from "./pages/search";
import Saved from "./pages/saved";
import GlobalProvider from "./utils/GlobalContext";

function App() {
  return (
    <Router>
      <GlobalProvider>
        <NavBar />
        <div className="App">
          <Switch>
            <Route exact path="/" component={SearchDisplay} />
            <Route exact path="/saved" component={Saved} />
          </Switch>
        </div>
      </GlobalProvider>
    </Router>
  );
}

export default App;
