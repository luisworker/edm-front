
import {Link, NavLink } from 'react-router-dom'

export const NavbarComponent = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <Link className="navbar-brand" href="#">EDM web enviroment</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <NavLink to={'/'} className="nav-link active" aria-current="page" >Home</NavLink>
                        <NavLink to={'/contact'} className="nav-link" >Contact</NavLink>
                        {/* <a className="nav-link" href="#">Pricing</a>
                        <a className="nav-link disabled" aria-disabled="true">Disabled</a> */}
                    </div>
                </div>
            </div>
        </nav>
    )
}
