import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navigation from './base-components/navigation';
import HomePage from "./packages/home/src/components/HomePage/HomePage";
import RentPage from "./packages/rent-page/src/components/RentPage";
import ChartPage from "./packages/cart/src/components/ChartPage";
import LoginPage from "./packages/authentication/src/components/LoginPage";
import RegisterPage from "./packages/authentication/src/components/RegisterPage";
import ProfilePage from "./packages/profile/src/components/ProfilePage";
import DetailProductPage from "./base-components/product/src/components/DetailProductPage/DetailProductPage";
import AdminPage from "./packages/admin/src/components/AdminPage";
import InventoryPage from "./packages/admin/src/components/InventoryPage";
import AddAdminPage from "./packages/admin/src/components/AddAdminPage";
import PlantPage from "./packages/category/src/components/plantPage/PlantPage";
import FlowerPage from "./packages/category/src/components/flowerPage/FlowerPage";
import BouquetPage from "./packages/category/src/components/bouquetPage/BouquetPage";
import VasePage from "./packages/category/src/components/vasePage/VasePage";
import AddProductPage from "./packages/admin/src/components/AddProductPage";

function App() {
  return (
    <div className="App">
      	<Router>
          <Navigation />
        	<Switch>
          		<Route path="/" exact component={() => <HomePage />} />
              <Route path="/rent-page" exact component={() => <RentPage />} />
              <Route path="/chart-page" exact component={() => <ChartPage />} />
              <Route path="/login-page" exact component={() => <LoginPage />} />
              <Route path="/register-page" exact component={() => <RegisterPage />} />
              <Route path="/profile" exact component={() => <ProfilePage />} />
              <Route path="/detail-product-page/:id" exact component={() => <DetailProductPage/>} />
              <Route path="/admin-page" exact component={() => <AdminPage/>} />
              <Route path="/add-admin-page" exact component={() => <AddAdminPage/>} />
              <Route path="/inventory" exact component={() => <InventoryPage/>} />
              <Route path="/plant-page" exact component={() => <PlantPage/>} />
              <Route path="/flower-page" exact component={() => <FlowerPage/>} />
              <Route path="/bouquet-page" exact component={() => <BouquetPage/>} />
              <Route path="/vase-page" exact component={() => <VasePage/>} />
              <Route path="/add-product-page" exact component={() => <AddProductPage/>} />
          </Switch>
      	</Router>
    	</div>
  );
}

export default App;

