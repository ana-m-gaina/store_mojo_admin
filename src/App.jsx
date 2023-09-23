import { Suspense, lazy } from "react";
import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import Layout from "./pages/layout/Layout";
import isAdmin from "./services/adminGuard";

const Home = lazy(() => import("./pages/home/Home"));
const UserList = lazy(() => import("./pages/userList/UserList"));
const User = lazy(() => import("./pages/user/User"));
const NewUser = lazy(() => import("./pages/newUser/NewUser"));
const ProductList = lazy(() => import("./pages/productList/ProductList"));
const Product = lazy(() => import("./pages/product/Product"));
const NewProduct = lazy(() => import("./pages/newProduct/NewProduct"));
const Login = lazy(() => import("./pages/login/Login"));

function App() {
  return (
    <Router>
      <Routes>
        <Route element={isAdmin() ? <Layout /> : <Navigate to="/admin" />}>
          <Route
            exact
            path="/dashboard"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <Home />
              </Suspense>
            }
          />
          <Route
            exact
            path="/users"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <UserList />
              </Suspense>
            }
          />
          <Route
            path="/user/:userId"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <User />
              </Suspense>
            }
          />
          <Route
            path="/newUser"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <NewUser />
              </Suspense>
            }
          />
          <Route
            path="/products"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <ProductList />
              </Suspense>
            }
          />
          <Route
            path="/product/:productId"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <Product />
              </Suspense>
            }
          />
          <Route
            path="/newproduct"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <NewProduct />
              </Suspense>
            }
          />
        </Route>
        <Route path="/admin" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
