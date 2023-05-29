import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Error from "../Pages/Error";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import TestRates from "../Pages/TestRates/TestRates";
import Consultancy from "../Pages/Consultancy/Consultancy";
import Experts from "../Pages/Experts/Experts";
import Contact from "../Pages/Contacts/Contact";
import Faq from "../Pages/FAQ/Faq";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <Error></Error>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/testrates',
                element: <TestRates></TestRates>
            },
            {
                path: '/consultancy',
                element: <Consultancy></Consultancy>
            },
            {
                path: '/experts',
                element: <Experts></Experts>
            },
            {
                path: '/contact',
                element: <Contact></Contact>
            },
            {
                path: '/faq',
                element: <Faq></Faq>
            },
        ]
    }
])