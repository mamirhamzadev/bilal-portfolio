import Home from "../pages/Home"
import Portfolio from "../pages/Portfolio"
import FAQs from "../pages/FAQs"
import Contact from "../pages/Contact"

export const HOME_ROUTE = "/"
export const PORTFOLIO_ROUTE = "/portfolio"
export const FAQS_ROUTE = "/faqs"
export const CONTACT_ROUTE = "/contact"

// stroke: #8991A7;
export default [
    {
        title: "Home",
        path: HOME_ROUTE,
        icon: <svg className="nav-icon" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M13.475 4.92481L9.03083 1.46814C8.64082 1.16473 8.1608 1 7.66667 1C7.17254 1 6.69251 1.16473 6.3025 1.46814L1.8575 4.92481C1.59037 5.13254 1.37424 5.39858 1.22563 5.7026C1.07701 6.00662 0.99984 6.34058 1 6.67897V12.679C1 13.121 1.17559 13.5449 1.48816 13.8575C1.80072 14.17 2.22464 14.3456 2.66667 14.3456H12.6667C13.1087 14.3456 13.5326 14.17 13.8452 13.8575C14.1577 13.5449 14.3333 13.121 14.3333 12.679V6.67897C14.3333 5.99314 14.0167 5.34564 13.475 4.92481Z"
                strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M10.9753 10.1665C9.13359 11.2773 6.14859 11.2773 4.30859 10.1665" strokeWidth="1.4"
                strokeLinecap="round" strokeLinejoin="round" />
        </svg>,
        element: Home
    },
    {
        title: "Portfolio",
        path: PORTFOLIO_ROUTE,
        icon: <svg className="nav-icon" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M9 9.8335C9.66304 9.8335 10.2989 9.5701 10.7678 9.10126C11.2366 8.63242 11.5 7.99654 11.5 7.3335C11.5 6.67045 11.2366 6.03457 10.7678 5.56573C10.2989 5.09689 9.66304 4.8335 9 4.8335C8.33696 4.8335 7.70107 5.09689 7.23223 5.56573C6.76339 6.03457 6.5 6.67045 6.5 7.3335C6.5 7.99654 6.76339 8.63242 7.23223 9.10126C7.70107 9.5701 8.33696 9.8335 9 9.8335Z"
                strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
            <path
                d="M9 1.5C15 1.5 16.5 3 16.5 9C16.5 15 15 16.5 9 16.5C3 16.5 1.5 15 1.5 9C1.5 3 3 1.5 9 1.5Z"
                strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
            <path
                d="M4 15.7085V15.6668C4 14.7828 4.35119 13.9349 4.97631 13.3098C5.60143 12.6847 6.44928 12.3335 7.33333 12.3335H10.6667C11.5507 12.3335 12.3986 12.6847 13.0237 13.3098C13.6488 13.9349 14 14.7828 14 15.6668V15.7085"
                strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>,
        element: Portfolio
    },
    {
        title: "Faqs",
        path: FAQS_ROUTE,
        icon: <svg className="nav-icon" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.99967 1.3335L1.33301 4.66683L7.99967 8.00016L14.6663 4.66683L7.99967 1.3335Z"
                strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M1.33301 8L7.99967 11.3333L14.6663 8" strokeWidth="1.4" strokeLinecap="round"
                strokeLinejoin="round" />
            <path d="M1.33301 11.3335L7.99967 14.6668L14.6663 11.3335" strokeWidth="1.4"
                strokeLinecap="round" strokeLinejoin="round" />
        </svg>,
        element: FAQs
    },
    {
        title: "Contact",
        path: CONTACT_ROUTE,
        icon: <svg className="nav-icon" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.66699 5.5H12.3337" strokeWidth="1.4" strokeLinecap="round"
                strokeLinejoin="round" />
            <path d="M5.66699 8.8335H10.667" strokeWidth="1.4" strokeLinecap="round"
                strokeLinejoin="round" />
            <path
                d="M14 1.3335C14.663 1.3335 15.2989 1.59689 15.7678 2.06573C16.2366 2.53457 16.5 3.17045 16.5 3.8335V10.5002C16.5 11.1632 16.2366 11.7991 15.7678 12.2679C15.2989 12.7368 14.663 13.0002 14 13.0002H9.83333L5.66667 15.5002V13.0002H4C3.33696 13.0002 2.70107 12.7368 2.23223 12.2679C1.76339 11.7991 1.5 11.1632 1.5 10.5002V3.8335C1.5 3.17045 1.76339 2.53457 2.23223 2.06573C2.70107 1.59689 3.33696 1.3335 4 1.3335H14Z"
                strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>,
        element: Contact
    }
]