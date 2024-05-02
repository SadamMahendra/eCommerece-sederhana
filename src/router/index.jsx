import { createBrowserRouter, RouterProvider } from "react-router-dom";

import TopNav from "../components/TopNavigation/TopNav";
import HomePage from "../pages/Home";
import CartPage from "../pages/Cart";
import HistoryPage from "../pages/History";
import DetailHistoryPage from "../pages/HistoryDetail";

const index = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <TopNav />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "/cart",
          element: <CartPage />,
        },
        {
          path: "/history",
          element: <HistoryPage />,
        },
        {
          path: "/history/:historyId",
          element: <DetailHistoryPage />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default index;
