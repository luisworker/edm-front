import {Navigate, Outlet} from "react-router-dom";
import {useAuth} from "../auth/AuthProvider.jsx";

export const ProtectedRoute = () => {
    const auth = useAuth();
    return auth.isAuthenticated ? <Outlet /> : <Navigate to="/" />;
}
