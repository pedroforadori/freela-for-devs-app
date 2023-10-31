
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from '../pages/login/Login';
import Register from '../pages/register/Register';


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

