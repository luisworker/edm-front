import {createContext, useState, useContext, useEffect} from 'react'
import {json} from "react-router-dom";
import {API_URL} from "./constants.js";

const AuthContext = createContext({
    isAuthenticated: false,
    getAccessToken: () => {},
    saveUser: () => {},
    getRefreshToken: () => {},
    saveUserLogin: () => {},
    getUserLogin: () => {},
    logout: () => {}
});
export function AuthProvider({ children }) {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [accessToken, setAccessToken] = useState('');
    const [userLogin, setUserLogin] = useState({});


    useEffect(() => {

        checkAuth();
    }, []);

    const checkAuth = async () => {
        if (accessToken) {
            // ya esta autenticado
            setIsAuthenticated(true);
        }
        else {
        //     //todo no esta autenticado, Esta implementacion es para cuando se recarga la pagina se realizará a futuro
        //     const refreshToken = getRefreshToken()
        //     if (refreshToken) {
        //
        //     }
            console.log('implementacion futura para mantenerse logueado')

        }
    }

    const requestNewAccessToken = async (refreshToken) => {
        try {
            const response = await fetch(`${API_URL}/auth/refresh-token`, {});
        } catch (error) {
            console.error(error);
        }
    }

    const getAccessToken = () => {
        if (!accessToken) {
            const token = localStorage.getItem('token');
            if (token) {
                return token;
            }
            else setIsAuthenticated(true)
        }

        return accessToken;
    }

    const getRefreshToken = () => {
        const token = localStorage.getItem('token');
        if (token) {
            const { refreshToken } = json.parse(token);
            return refreshToken;
        }
        return null;
    }

    const saveUser = (userData) => {
        const { accessToken, refreshToken } = userData;


        setAccessToken(accessToken);
        localStorage.setItem('token', JSON.stringify(accessToken));
        // localStorage.setItem('token', JSON.stringify(refreshToken));
        setIsAuthenticated(true);

    }

    const saveUserLogin = (userDto) => {
        localStorage.setItem('user', JSON.stringify(userDto));
        setUserLogin(userDto);
    }

    const getUserLogin = () => {
        if (!userLogin) {
            const user = localStorage.getItem('user');
            if (user) {
                const userDto = json.parse(user);
                setUserLogin(userDto);
                return userDto;
            }
        }
        return userLogin;
    }

    const logout = () => {
        setAccessToken('');
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        setIsAuthenticated(false);
    }

    //obtener los datos del usuario logueado

    return <AuthContext.Provider value={{ isAuthenticated, getAccessToken, saveUser, getRefreshToken, saveUserLogin, getUserLogin, logout}}>
        {children}
    </AuthContext.Provider>
}
export const useAuth = () => useContext(AuthContext);
