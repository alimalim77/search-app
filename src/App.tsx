import React, { useState } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  RouteObject,
} from "react-router-dom";
import ProductList from "./components/ProductList";
import WishlistItemDetail from "./components/WishListItemDetail";

const App: React.FC = () => {
  const [itemName, setItemName] = useState("");

  const routes: RouteObject[] = [
    {
      path: "/",
      element: <ProductList />,
    },
    {
      path: "/wishlist/:itemName",
      element: <WishlistItemDetail />,
    },
  ];

  const router = createBrowserRouter(routes);

  return (
    <div className="App">
      <center>
        <h1>Search App</h1>
      </center>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
