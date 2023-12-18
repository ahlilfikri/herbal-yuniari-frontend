// Routing.js
import { createBrowserRouter } from "react-router-dom";
import Home from './page/home/Home';
import SingleProduct from './page/single-product/SingleProduct';

const Routing = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/product/:id", // Include the parameter :id
    element: <SingleProduct />,
  },
]);

export default Routing;
