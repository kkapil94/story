import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import { lazy, Suspense } from "react";
import Movie from "./components/Movie";
import { Provider } from "react-redux";
import store from "./store";

const AllMovies = lazy(()=>import('./components/AllMovies'))
const AppLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};
export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <HeroSection />,
      },
      {
        path: "/movies",
        element: <AllMovies />,
      },
      {
        path: "/movies/:id",
        element: <Movie />,
      },
    ],
  },
]);

export default function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}
