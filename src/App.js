import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import { Footer, Header, Home, SearchPage } from "./components";

function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <Switch>
          <Route path="/search">
            <SearchPage />
          </Route>

          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
