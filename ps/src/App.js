import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navigation from "./base-components/navigation/Navigation";
import About from "./pages/About/About";
import HomePage from "./packages/home/src/components/HomePage/HomePage";
import RentPage from "./packages/rent-page/src/components/RentPage";
import ChartPage from "./packages/cart/src/components/ChartPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Switch>
          <Route path="/" exact component={() => <HomePage />} />
          <Route path="/about" exact component={() => <About />} />
          <Route path="/rent-page" exact component={() => <RentPage />} />
          <Route path="/chart-page" exact component={() => <ChartPage />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
