import {Navigate} from "react-router-dom";
import {useAuth} from "../auth/AuthProvider.jsx";
import {useEffect} from "react";

export const Logout = () => {
    const auth = useAuth();
    const {logout} = auth;

    useEffect(() => {
        logout();
    }, [logout]);

    return <Navigate to='/'/>

}
