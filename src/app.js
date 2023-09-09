import React, { Children, useState,useContext } from "react";
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
import useOnline from "./utils/useOnline";
import Section from "./components/Accodian";
import userContext from "./utils/userContext";
import SubFooter from "./components/SubFooter";
import Store from "./utils/store";
import { Provider } from "react-redux";
import CartPage from "./components/CartPage";



const AppLayout=()=>{
  const[user,setUser]=useState({
    name:"gaurav",
    emial:"gaurav@gmail.com"
  })
  const isonline=useOnline();
  if(!isonline)return <h1>Check your internet conection</h1>
    return (
        <Provider store={Store}>
        
        <userContext.Provider value={{user:user,setUser:setUser}}>
        <Header />
        <Outlet/>
        <Footer/>
        <SubFooter/>
        </userContext.Provider>
        </Provider>
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
        path: '/Accodian',
        element: <Section />,
        errorElement: <Error />,
      },
      {
        path: '/cart',
        element: <CartPage/>,
        errorElement: <Error />,
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
        path: '/Restaurant/:resId',
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