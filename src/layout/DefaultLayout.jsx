import {Link} from "react-router-dom";
import {useAuth} from "../auth/AuthProvider.jsx";

export const DefaultLayout = ({ children }) => {
    const auth = useAuth()
    return (
        <>
            <header className="navbar navbar-expand-lg bg-body-tertiary">
                <nav className="container-fluid">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <h2> EDM-CMS
                            </h2>
                        </li>
                        <li className="nav-item">
                            {!auth.isAuthenticated && <Link to='/' className="nav-link">
                                Login
                            </Link>}
                        </li>
                        <li className="nav-item">
                            {!auth.isAuthenticated && <Link to='/singup' className="nav-link">
                                Singup
                            </Link>}
                        </li>
                        <li className="nav-item ml-auto">
                            {auth.isAuthenticated && <Link to='/logout' className="nav-link">
                                Logout
                            </Link>}
                        </li>
                    </ul>
                </nav>
            </header>
            <main>
                {children}
            </main>
        </>
    )
}
