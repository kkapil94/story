import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import AllMovies from "./components/AllMovies";


const AppLayout = ()=>{
    return(
        <>
            <Navbar/>
            <Outlet/>
        </>
    )
}
export const router = createBrowserRouter([
    {
        path:"/",
        element:<AppLayout/>,
        children:[
            {
                path:"/",
                element:<HeroSection/>
            },
            {
                path:"/movies",
                element:<AllMovies/>
            }
        ]
    }
]);

export default function App(){
    return(<RouterProvider router={router}/>)
}