import "./App.css";
import { Switch, Route } from "react-router-dom";
import Header from "./containers/Header";
import ProductListing from "./containers/ProductListing";
import ProductDetailComponent from "./containers/ProductDetailComponent";
import NoPage from "./containers/NoPage";
import ProductForm from "./containers/ProductForm";
import CategoryForm from "./containers/CategoryForm";
import Footer from "./containers/Footer";
import CategoryUpdate from "./containers/CategoryUpdate";
import Register from "./containers/Register";
import Login from "./containers/Login";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadUser } from "./containers/redux/actions/auth";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);
  let authTokenJWT = useSelector((state) => state.AuthToken);
  console.log(authTokenJWT);
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/" exact component={ProductListing} />
        <Route path="/product/:id" component={ProductDetailComponent} />
        <Route path="/category/:id/addProduct" component={ProductForm} />
        <Route path="/category/CategoryForm" component={CategoryForm} />
        <Route path="/category/:id/CategoryUpdate" component={CategoryUpdate} />
        <Route path="/register" component={Register} />ِ
        <Route path="/login" component={Login} />ِ
        <Route path="*" component={NoPage} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
