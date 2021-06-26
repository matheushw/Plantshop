import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navigation from './base-components/navigation';
import About from "./pages/About/About";
import HomePage from "./packages/home/src/components/HomePage/HomePage";
import RentPage from "./packages/rent-page/src/components/RentPage";
import ChartPage from "./packages/cart/src/components/ChartPage";
import LoginPage from "./packages/authentication/src/components/LoginPage";
import RegisterPage from "./packages/authentication/src/components/RegisterPage";
import ProfilePage from "./packages/profile/src/components/ProfilePage";
import DetailProductPage from "./base-components/product/src/components/DetailProductPage/DetailProductPage";

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
          <Route path="/login-page" exact component={() => <LoginPage />} />
          <Route path="/register-page" exact component={() => <RegisterPage />} />
          <Route path="/profile" exact component={() => <ProfilePage />} />
          <Route path="/detail-product-page/:name/:price/:img" exact component={() => <DetailProductPage/>} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
