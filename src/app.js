
import React from 'react';
import ReactDOM  from 'react-dom/client';

// named import
// import { Title} from './components/Header';

import Header from './components/Header'
import Body from './components/Body'
import Footer from './components/Footer'
import Error from './components/error';
import About from './components/about';
import Contact from './components/contact';
import RestaurantMenu from './components/RestaurantMenu';
import { createBrowserRouter, RouterProvider ,Outlet } from 'react-router-dom';


const AppLayout =() =>{
    return (
        <>
        <Header />
        <Outlet/>
        <Footer />
        </>
    )
}
const appRouter = createBrowserRouter([
    {
       path: "/",
       element: <AppLayout/>,
       errorElement: <Error />, 
       children:[
        {
            path: "/",
            element: <Body />, 
         },
        {
            path: "/about",
            element: <About />, 
         },
         {
            path: "/contact",
            element: <Contact />, 
         },
         {
            path: "/restaurant/:id",
            element: <RestaurantMenu />, 
         }
       ]
    },
])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter} />);
// root.render(<Jsx/>)