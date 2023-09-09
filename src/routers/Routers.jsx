import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout/MainLayout";
import Category from "../pages/Home/Category";
import NewsLayout from "../layout/NewsLayout/NewsLayout";

export const router = createBrowserRouter([
  { path: "/", element: <MainLayout></MainLayout>, children: [{
    path:'/category/:id',element:<Category></Category> 
  }] },
  {
    path:"news",element:<NewsLayout></NewsLayout>,children:[{
      
    }]
  }
]);
