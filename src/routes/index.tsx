import { useContext } from "react";
import { UserContext } from "../context/user";
import AuthRoutes from "./auth.routes";
import AppRoutes from "./app.routes";
import { Center, Spinner } from "@chakra-ui/react";

const Routes = () => {
    const { isAuth, loading } = useContext(UserContext);

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