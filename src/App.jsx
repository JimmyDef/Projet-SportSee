import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./layout/RootLayout";
import Profile from "./pages/Profile";
import Connexion from "./pages/Connexion";

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
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}
export default App;
