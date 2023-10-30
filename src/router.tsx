
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './pages/login/Login.tsx'
import Register from './pages/register/Register.tsx'
import Home from './pages/home/Home.tsx'

const AppRoutes = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="register" element={<Register />} />
                <Route path="home" element={<Home />} />            
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;

