import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout/MainLayout";
import Category from "../pages/Home/Category";
import NewsLayout from "../layout/NewsLayout/NewsLayout";
import NewsDetailCard from "../pages/NewsDetailCard";
import LoginLayout from "../layout/LoginLayout/LoginLayout";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Terms from "../pages/Terms";

export const router = createBrowserRouter([
  {
    path:'/',
    element:<LoginLayout></LoginLayout>,
    children:[{
      path:'/login',
      element:<Login></Login>,
    },
    {
      path:'/register',
      element:<Register></Register>
    },
    {
      path:'/terms',
      element:<Terms></Terms>
    }

  ]
  },
  
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/category/:id",
        element: <Category></Category>,
        loader: ({ params }) =>
          fetch(`http://localhost:3000/news/category/${params.id}`),
      },
    ],
  },
  {
    path: "news",
    element: <NewsLayout></NewsLayout>,
    children: [
      {
        path: ":id",
        element: <NewsDetailCard></NewsDetailCard>,
        loader: ({ params }) =>
          fetch(`http://localhost:3000/news/${params.id}`),
      },
    ],
  },
]);
