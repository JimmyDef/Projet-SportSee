import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./layout/RootLayout";
import Profile from "./pages/Profile";
import Connexion from "./pages/Connexion";
import NotFound from "./pages/404";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,

    children: [
      {
        index: "/",
        element: <Connexion />,
      },
      {
        path: "profile/:id",
        element: <Profile />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
      {
        path: "NotFound",
        element: <NotFound />,
      },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}
export default App;
