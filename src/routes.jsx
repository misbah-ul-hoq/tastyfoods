import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./pages/Layout/Main";
import HomePage from "./pages/HomePage";
import MenuPage from "./pages/MenuPage";
import OrderPage from "./pages/OrderPage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import Dashboard from "./pages/Layout/Dashboard";
import DashboardCarts from "./pages/Dashboard/Carts";
import PrivateRoute from "./pages/PrivateRoute";
import ManageItems from "./pages/Dashboard/ManageItems";
import AllUsers from "./pages/Dashboard/AllUsers";
import AddItems from "./pages/Dashboard/AddItems";
import AdminRoute from "./pages/AdminRoute";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/menu",
        element: <MenuPage />,
      },
      {
        path: "/order",
        element: <OrderPage />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/signup",
        element: <SignupPage />,
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <Dashboard />
      </PrivateRoute>
    ),
    children: [
      //all user routes
      {
        path: "carts",
        element: <DashboardCarts />,
      },
      {
        path: "manage-items",
        element: <ManageItems />,
      },

      //admin only routes
      {
        path: "add-items",
        element: (
          <AdminRoute>
            <AddItems />
          </AdminRoute>
        ),
      },

      {
        path: "all-users",
        element: <AllUsers />,
      },
    ],
  },
]);

export default routes;
