import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Body from "./components/Body";

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
    ],
  },
]);
