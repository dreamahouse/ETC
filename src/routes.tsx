import { createBrowserRouter } from "react-router-dom";
import Combo from "./components/Combo";
import Complaint from "./components/Complaint";
import Department from "./components/Department";
import Material from "./components/Material";
import PerformanceDetail from "./components/PerformanceDetail";
import Permissions from "./components/Permissions";
import Program from "./components/Program";
import Refund from "./components/Refund";
import TeamDetail from "./components/TeamDetail";
import Users from "./components/Users";
import UsersDetaile from "./components/UsersDetaile";
import ForgetPassword from "./pages/ForgetPassword";
import LayoutPage from "./pages/LayoutPage";
import Login from "./pages/Login";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <LayoutPage />,
    children: [
      {
        index: true,
        element: <Users />,
      },
      {
        path: "user",
        element: <Users />,
        children: [{ path: "detaile/:status", element: <UsersDetaile /> }],
      },
      {
        path: "unit",
        element: <Department />,
        children: [
          {
            path: "performance/:userId",
            element: <PerformanceDetail />,
          },
          {
            path: "team/:userId",
            element: <TeamDetail />,
          },
        ],
      },
      {
        path: "program",
        element: <Program />,
      },
      {
        path: "combo",
        element: <Combo />,
      },
      {
        path: "material",
        element: <Material />,
      },
      {
        path: "permissions",
        element: <Permissions />,
      },
      {
        path: "complaint",
        element: <Complaint />,
      },
      {
        path: "refund",
        element: <Refund />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/password",
    element: <ForgetPassword />,
  },
]);

export default routes;
