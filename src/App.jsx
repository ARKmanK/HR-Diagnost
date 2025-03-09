import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from "./components/UI/Header";

import Home from "./pages/Home";
import Holland from "./pages/Holland";
import PageNotFound from "./pages/PageNotFound";

export default function MyApp() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      errorElement: <PageNotFound />,
    },
    {
      path: "/holland",
      element: <Holland />,
      errorElement: <PageNotFound />,
    },
  ]);

  return (
    <RouterProvider router={router}>
      <Header />
    </RouterProvider>
  );
}
