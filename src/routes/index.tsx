import {createBrowserRouter} from'react-router-dom'
import Home from '../page/Home'
import App from '../App'
import Login from '../page/Login'
import NotFound from '../page/NotFound'


export const routes = createBrowserRouter([
    {
        path:'/',
        element: <App/>
    },
    {
        path:'/home',
        element: <Home/>
    },
    {
        path:'/login',
        element: <Login/>
    },
    {
        path:'*',
        element: <NotFound/>
    },
])