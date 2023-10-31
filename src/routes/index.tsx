import { useContext } from "react";
import { AuthContext } from "../context/Auth";
import AuthRoutes from "./Auth.routes";
import AppRoutes from "./App.routes";
import { Center, Spinner } from "@chakra-ui/react";

const Routes = () => {
    const { isAuth, loading } = useContext(AuthContext);

    if(loading) {
        return (
            <Center h='100vh'>
                <Spinner size='xl' />
            </Center>
        )
      }
    
    return  isAuth ? <AppRoutes /> : <AuthRoutes />
}

export default Routes;