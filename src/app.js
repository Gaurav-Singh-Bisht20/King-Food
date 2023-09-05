import React, { Children } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import About from "./components/About";
import Error from "./components/Error";
import Example from "./components/ClassBaseComp";
import { createBrowserRouter,Outlet,RouterProvider } from "react-router-dom";
import RestaurantMenu from "./components/RestaurantMenu";
import Notification from "./components/Notification";
import Profile from "./components/Profile";



const AppLayout=()=>{
    return (
        <>
        <Header />
        <Outlet/>
        <Footer/>
        </>
    )
}
const AppRouter = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: '/about',
        element: <About />,
        errorElement: <Error />,
        children:[
          {
          path:'profile',
          element:<Profile/>,
          errorElement:<Error/>
          }
        ]
      },
      {
        path:`/classbase`,
        element:<Example/>,
        errorElement:<Error/>
      },
      {
        path: '/',
        element: <Body />,
        errorElement: <Error />
      },
      {
        path: '/Restaurant/:id',
        element: <RestaurantMenu />,
        errorElement: <Error />
      },
      {
        path: '/notification',
        element: <Notification />,
        errorElement: <Error />
      }
      
    ]
  }
]);

const root= ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={AppRouter}/>)