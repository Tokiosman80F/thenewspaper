import { Navigate, createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout/MainLayout";
import Category from "../pages/Home/Category";
import NewsLayout from "../layout/NewsLayout/NewsLayout";
import NewsDetailCard from "../pages/NewsDetailCard";
import LoginLayout from "../layout/LoginLayout/LoginLayout";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Terms from "../pages/Terms";
import PrivateRoute from "./PrivateRoute";
import About from "../pages/About";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginLayout></LoginLayout>,
    children: [
      {
        path:"/",
        element:<Navigate to='/category/0'></Navigate>
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/terms",
        element: <Terms></Terms>,
      },
    ],
  },

  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/category/:id",
        element: <Category></Category>,
        loader: ({ params }) =>
          fetch(`http://newspaper-server-4cmkjqvyb-tokiosman0135-gmailcom.vercel.app/news/category/${params.id}`),
      },
      {
        path:'/About',
        element:<About></About>
      }
    ],
  },
  {
    path: "news",
    element: <NewsLayout></NewsLayout>,
    children: [
      {
        path: ":id",
        element: (
          <PrivateRoute>
            <NewsDetailCard></NewsDetailCard>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://newspaper-server-4cmkjqvyb-tokiosman0135-gmailcom.vercel.app/news/${params.id}`),
      },
    ],
  },
]);
