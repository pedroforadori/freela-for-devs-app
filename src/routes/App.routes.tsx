import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from '../pages/home/home';
import NewProject from '../components/newProject/newProject';
import ClientProjects from '../components/clientProjects/clientProjects';
import { UserContext } from '../context/user';
import { useContext } from 'react';

const routerClient = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
        children: [
            {
                index: true,
                element: <ClientProjects />
            },
            {
                path: "/registerProject",
                element: <NewProject />
            }
        ]
    }
])

const routerFreela = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
        children: [
            {
                index: true,
                element: <ClientProjects />
            },
            {
                path: "/registerProject",
                element: <NewProject />
            }
        ]
    }
])

const AppRoutes = () => {
    const { user } = useContext(UserContext);
    
    return(
        <RouterProvider 
            router={
                user?.type === 1 
                ? routerClient
                : routerFreela
            } 
        />
    )
}

export default AppRoutes;