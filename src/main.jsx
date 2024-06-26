import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {Login} from "./routes/Login.jsx";
import {Dashboard} from "./routes/Dashboard.jsx";
import {ProtectedRoute} from "./routes/ProtectedRoute.jsx";
import {AuthProvider} from "./auth/AuthProvider.jsx";
import {Sinup} from "./routes/Sinup.jsx";

const router = createBrowserRouter(
    [
        {
            path: '/',
            element: <Login/>
        },
        {
            path: '/singup',
            element: <Sinup/>
        },
        {
            path: '/dashboard',
            element: <ProtectedRoute/>,
            children: [
                {
                    path: '/dashboard',
                    element: <Dashboard/>
                }
            ]
        }
    ]
)
ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <AuthProvider>
            <RouterProvider router={router}/>
        </AuthProvider>
    </React.StrictMode>
)
