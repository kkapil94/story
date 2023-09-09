import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import { lazy, Suspense } from "react";


const AllMovies = lazy(()=>import('./components/AllMovies'))
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
                element:<Suspense fallback={"Shimmer..."}>
                            <AllMovies/>
                        </Suspense>
            }
        ]
    }
]);

export default function App(){
    return(<RouterProvider router={router}/>)
}