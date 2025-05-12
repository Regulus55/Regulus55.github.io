import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import { Home, NotFound } from "./pages";
import ProjectDetail from "./pages/ProjectDetail";

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
      {
        path: ":slug",
        element: <ProjectDetail />,
      },
    ],
  },
]);

export default router;
