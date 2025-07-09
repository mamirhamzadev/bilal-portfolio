import { Link, useLocation } from "react-router-dom"
import routes, { CONTACT_ROUTE } from "../../contants/routes"
import { useEffect, useState } from "react"
import { LETS_TALK_ICON, MOON_ICON, SUN_ICON } from "../../contants/images";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";


function Header() {
    const [isShowingNav, setIsShowingNav] = useState(false)
    const location = useLocation()
    useEffect(() => {
        const isDarkMode = localStorage.getItem('darkMode') === 'true';
        document.body.classList.toggle('dark-theme', isDarkMode);
    }, [])

    const changeTheme = () => {
        document.body.classList.toggle('dark-theme');
        const isDark = document.body.classList.contains('dark-theme');
        localStorage.setItem('darkMode', isDark);
    }

    return (
        <header className="header-area">
            <nav className="navbar">
                <div className="container">
                    <div className="menu-container">
                        <div className={`navbar-main d-flex flex-grow-1 ${isShowingNav ? "show" : ""}`}>
                            <ul className="navbar-info me-auto">
                                {routes.map((route, index) => (
                                    <li key={index} className="nav-item me-1">
                                        <Link className={`nav-link`} to={route.path}>
                                            {route.icon}
                                            <span>{route.title}</span>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                            <div className="header-right-info d-flex align-items-center">
                                <button className="theme-control-btn" onClick={changeTheme}>
                                    <span className="dark">
                                        <img src={MOON_ICON} alt="moon img" />
                                        <small className="theme-text d-block d-xl-none">Change appearance</small>
                                    </span>
                                    <span className="light">
                                        <img src={SUN_ICON} alt="moon img" />
                                        <small className="theme-text d-block d-xl-none">Change appearance</small>
                                    </span>
                                </button>
                                <Link to={CONTACT_ROUTE} className="lets-talk-btn">
                                    Let's Talk
                                    <img src={LETS_TALK_ICON} alt="" className="icon" />
                                </Link>
                            </div>
                        </div>
                        <div onClick={() => setIsShowingNav(false)} className={`mobile-menu-overlay d-block d-xl-none ${isShowingNav ? "show" : ""}`} />
                        <div className="mobile-menu-control-bar d-block d-xl-none">
                            <button className="btn p-0" onClick={() => setIsShowingNav(true)}>
                                <FontAwesomeIcon icon={faBars} fontSize={25} />
                            </button>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header