import './App.scss';
import IndexPage from "./pages/index";
import SearchView from "./pages/search";
import Upload from "./pages/upload";
import React  from "react"
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <IndexPage />
        </Route>
        <Route path="/busqueda">
          <SearchView />
        </Route>
        <Route path="/catalogo">
          <Upload />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
