import { createBrowserRouter } from "react-router-dom";
import ProductListPage from "../pages/ProductListPage/ProductListPage";

import App from "../App";
import ShopApplicationWrapper from "../Register/ShopApplicationWrapper";



export const router = createBrowserRouter([
    {
      path: "/",
      element: <ShopApplicationWrapper />,
      children:[
        {
          path:"/",
          element:<App/>,
      },
        {
          path:"/women",
          element:<ProductListPage categoryType={'WOMEN'}/>,
      },
      {
        path:"/men",
        element:<ProductListPage categoryType={'MEN'}/>,
      }
      ]
  
     
     
     
       
      
       
    

    }
  ]);