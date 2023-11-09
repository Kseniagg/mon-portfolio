import { NavLink } from "react-router-dom";
import BntDarkMode from "../btnDarkMode/BtnDarkMode";
import "./style.css";


const Navbar = () => {
    const activeLink = 'nav-list__link nav-list__link--active';
    const normalLink = 'nav-list__link';

    return (
        <nav className="nav">
            <div className="container">
                <div className="nav-row">
                    <NavLink to="/" className="logo">
                        Kseniia <strong>Gladkova</strong> portfolio
                    </NavLink>

                    <BntDarkMode />

                    <ul className="nav-list">
                        <li className="nav-list__item"><NavLink
                            to="/"
                            className={({ isActive }) =>
                                isActive ? activeLink : normalLink
                            }
                        >
                            Accueil
                        </NavLink>
                        </li>

                        <li className="nav-list__item">
                            <NavLink
                                to="/projects"
                                className={({ isActive }) =>
                                    isActive ? activeLink : normalLink
                                }
                            >
                                Projects
                            </NavLink>
                        </li>
                        <li className="nav-list__item">
                            <NavLink
                                to="/contacts"
                                className={({ isActive }) =>
                                    isActive ? activeLink : normalLink
                                }
                            >
                                Contacts
                            </NavLink></li>
                    </ul>
                </div>
            </div>
        </nav >
    );
}

export default Navbar;