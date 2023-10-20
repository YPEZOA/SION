import { RouterProvider, createBrowserRouter } from "react-router-dom"
import App from "@/App"
import Header from "../components/header/Header"

export const RouterRoot =()=> {
    const router = createBrowserRouter([
        {
            path:'/',
            element: <App/>
        }
    ])

    return (
        <>
        <Header/>
        <RouterProvider router={router}/>
        </>
    )
}