import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./layout/RootLayout";
import Profile from "./pages/profile/Profile";

// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,

    children: [
      {
        index: "/",
        element: <Profile />,
      },

      // {
      // path: "*",
      // element: <NotFound />,
      // },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}
export default App;
