import { Route, Routes } from "react-router";
import HomePage from "../pages/HomePage";
import NotFound from "../pages/NotFound";
import Category from "../pages/category/Category";
import OneCategory from "../pages/category/OneCategory";
import ProductCategory from "../pages/category/ProductCategory";
import Login from "../pages/login/Login";
import Signup from "../pages/signup/SignUp";

const allRoutes = [
  { id: 1, path: "/", element: <HomePage /> },
  { id: 2, path: "/login", element: <Login /> },
  { id: 3, path: "/signup", element: <Signup /> },
  { id: 4, path: "/category", element: <Category /> },
  { id: 5, path: "/category/:categoryName", element: <OneCategory /> },
  { id: 6, path: "/category/:categoryName/:productCategory", element: <ProductCategory /> },
  { id: 7, path: "*", element: <NotFound /> },
];
function Routers() {
  return (
    <Routes>
      {allRoutes.map((item) => <Route key={item.id} path={item.path} element={item.element} />)}
    </Routes>
  )
}

export default Routers;
