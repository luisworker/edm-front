import {Link} from "react-router-dom";

export const DefaultLayout = ({ children }) => {
    return (
        <>
            <header>
                <nav>
                    <ul>
                        <li>
                            <Link to='/'>
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to='/singup'>
                                Singup
                            </Link>
                        </li>
                    </ul>
                </nav>
            </header>
            <main>
                { children }
            </main>
        </>
    )
}
