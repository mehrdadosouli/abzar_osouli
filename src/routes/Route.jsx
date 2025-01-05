import { Route, Routes } from "react-router";
import HomePage from "../pages/HomePage";
import NotFound from "../pages/NotFound";

const allRoutes = [
  { id: 1, path: "/", element: <HomePage /> },
  { id: 2, path: "/notfound", element: <NotFound /> },
];
function Routers() {
  return (
    <Routes>
      {allRoutes.map((item) => <Route key={item.id} path={item.path} element={item.element} />)}
    </Routes>
  )
}

export default Routers;
