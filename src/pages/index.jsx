import { useEffect } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from "./partials/Header"
import AppBackground from "./templates/AppBackground"
import { CONTACT_ROUTE, FAQS_ROUTE, HOME_ROUTE, PORTFOLIO_ROUTE } from "../contants/routes"
import Home from "./Home"
import Portfolio from "./Portfolio"
import FAQs from "./FAQs"
import Contact from "./Contact"
import 'swiper/css';
import 'swiper/css/navigation';

function App() {
  useEffect(() => {
    const theme = localStorage.getItem("portfolio-theme") || "";
    if (theme)
      document.body.classList.add(theme);
  }, [])

  return (
    <div className="fade-in">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route element={<AppBackground />}>
            <Route index path={HOME_ROUTE} element={<Home />} />
            <Route path={PORTFOLIO_ROUTE} element={<Portfolio />} />
            <Route path={FAQS_ROUTE} element={<FAQs />} />
            <Route path={CONTACT_ROUTE} element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
