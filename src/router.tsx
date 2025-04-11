import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import { Home, NotFound } from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
]);

export default router;
