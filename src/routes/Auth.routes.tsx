
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from '../pages/login/login';
import Register from '../pages/register/register';


const AuthRoutes = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="register" element={<Register />} /> 
            </Routes>
        </BrowserRouter>
    )
}

export default AuthRoutes;

