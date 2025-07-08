import { Link } from "react-router-dom";
import { CONTACT_ROUTE, PORTFOLIO_ROUTE } from "../contants/routes";
import { initializeHomePageData } from "../contants/siteData";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { library } from "@fortawesome/fontawesome-svg-core"
import { fab } from "@fortawesome/free-brands-svg-icons"
import { fas, faStar } from "@fortawesome/free-solid-svg-icons"
import { faClone } from "@fortawesome/free-regular-svg-icons";
import { faArrowLeft, faArrowRight, faDownload, faPhoneVolume } from "@fortawesome/free-solid-svg-icons";

library.add(fab, fas)

function Home() {
    const HomePageData = initializeHomePageData()
    return (
        <section className="home-area">
            <div className="container">
                <div className="row g-4">
                    <div className="col-xl-4">
                        <div className="card profile-card">
                            <div className="card-body">
                                <div className="text">
                                    <p><span className="h4">👋 Hi, I’m {HomePageData.name}</span> </p>
                                    {HomePageData.description}
                                    <div className="common-button-groups">
                                        <button className="btn btn-call" onClick={() => {
                                            Calendly.initPopupWidget({ url: 'https://calendly.com/bilal16/30min' });
                                        }}>
                                            <FontAwesomeIcon icon={faPhoneVolume} className="icon" fontSize={20} />
                                            Book A call
                                        </button>
                                        <button className="btn btn-copy" onClick={() => navigator.clipboard.writeText(HomePageData.email)}>
                                            <FontAwesomeIcon icon={faClone} fontSize={20} className="icon" />
                                            Copy Email
                                        </button>
                                    </div>
                                    <div className="social-media-icon">
                                        <ul className="list-unstyled w-100">
                                            <li className="w-100">
                                                <Link to={HomePageData.github} target="_blank" className="d-block w-100 cursor-pointer btn-copy">
                                                    <FontAwesomeIcon icon={['fab', 'github']} />
                                                    Github Link
                                                </Link>
                                            </li>
                                            <li className="w-100 mt-2">
                                                <Link download to={HomePageData.resume} target="_blank" className="d-block w-100">
                                                    <FontAwesomeIcon icon={faDownload} />
                                                    Download Resume
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4">
                        <div className="row g-4">
                            <div className="col-lg-12">
                                <div className="card">
                                    <div className="card-body work-experiance-card">
                                        <h3 className="card-title">Why Work With Me?</h3>
                                        <div className="work-experiance-main">
                                            <ul className="work-experiance-slider list-unstyled">
                                                {HomePageData.why_work_with_me.map((item, index) => (
                                                    <li key={index}>
                                                        <div className="info px-2 py-4 rounded" style={{ backgroundColor: '#F0F2F5' }}>
                                                            <div className="text">
                                                                <h4 className="title">{item.title}</h4>
                                                                <h6 className="subtitle">{item.subTitle}</h6>
                                                            </div>
                                                        </div>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="card expertise-card">
                                    <div className="card-body">
                                        <h3 className="card-title">Highlights in Metrics
                                        </h3>
                                        <div className="expertise-main mt-24">
                                            <div className="row g-3">
                                                {HomePageData.highlights.map((highlight, index) => (
                                                    <div key={index} className="col-xl-4 col-md-4 col-sm-6 col-6">
                                                        <div className="expertise-item">
                                                            <div className="image text-center">
                                                                <h4 className="title">{highlight.data}</h4>
                                                            </div>
                                                            <div className="text">
                                                                <h4 className="title">{highlight.title}</h4>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4">
                        <div className="card card-projects">
                            <div className="card-body">
                                <h3 className="card-title">
                                    Recent Projects
                                    <Link className="link-btn" to={PORTFOLIO_ROUTE}>
                                        All Projects
                                        <FontAwesomeIcon icon={faArrowRight} className="icon" />
                                    </Link>
                                </h3>
                                <div className="projects-main mt-24">
                                    <div className="row g-4 parent-container">
                                        {HomePageData.projects.map((project, index) => (
                                            <div key={index} className="col-lg-12">
                                                <div className="project-item">
                                                    <Link to={project.path} className="card border border-2 rounded">
                                                        <img src={project.image} alt="project-2" className="img-fluid w-100" />
                                                    </Link>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="services-area mt-24">
                    <div className="row g-4">
                        <div className="col-xl-8">
                            <div className="card services-card">
                                <div className="card-body">
                                    <h3 className="card-title">Services I Offered
                                        <Link className="link-btn" to=""> Transforming Ideas into Innovative Reality
                                        </Link>
                                    </h3>
                                    <div className="services-main mt-24">
                                        <div className="row g-4">
                                            {HomePageData.services.map((service, index) => (
                                                <div key={index} className="col-md-4 col-sm-6 col-6">
                                                    <div className="services-item text-center">
                                                        <div className="image">
                                                            <img src={service.image} alt="ui-ux" />
                                                        </div>
                                                        <div className="text">
                                                            <h3 className="title">{service.title}</h3>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="content-box-card">
                                        <div className="work-together-slider">
                                            <div className="slider-main d-flex gap-4 align-items-center">
                                                <div className="slider-item">
                                                    <Link to="">I craft modern web and AI-powered solutions that turn your concepts into working products.
                                                        From sleek UI to smart functionality — I deliver experiences that perform and scale.</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 h-100">
                            <div className="row g-4">
                                <div className="col-xl-12">
                                    <div className="card content-box-card">
                                        <div className="card-body py-4 px-4">
                                            <div className="client-feedback mt-0">
                                                <h3 className="card-title">Trusted By 237+ Clients
                                                </h3>
                                                <div className="row client-feedback-slider">
                                                    <Swiper
                                                        slidesPerView={2}
                                                        autoplay={{ delay: 2000 }}
                                                        speed={300}
                                                        loop
                                                        modules={[Autoplay, Navigation]}
                                                        navigation={{
                                                            prevEl: "#feedback-back-btn",
                                                            nextEl: "#feedback-forward-btn"
                                                        }} breakpoints={{
                                                            768: {
                                                                slidesPerView: 1
                                                            }
                                                        }}>
                                                        <FontAwesomeIcon icon={faArrowLeft} className="left icon" id=" feedback-back-btn" />
                                                        <FontAwesomeIcon icon={faArrowRight} className="right icon" id=" feedback-forward-btn" />
                                                        {HomePageData.client_testimonials.map((testimonial, index) => (
                                                            <SwiperSlide key={index}>
                                                                <div className="col-lg-12">
                                                                    <div className="feedback-item">
                                                                        <div className="feedback-top-info">
                                                                            <div className="rating">
                                                                                {Array.from({ length: 5 }).map((_, index) => (
                                                                                    <FontAwesomeIcon icon={index + 1 <= testimonial.ratings ? ["fas", "star"] : faStar} />
                                                                                ))}
                                                                            </div>
                                                                        </div>
                                                                        <div className="details">
                                                                            <p>{testimonial.description}</p>
                                                                        </div>
                                                                        <div className="feedback-top-info">
                                                                            <div className="website">
                                                                                <Link to={testimonial.path} target="_blank">{testimonial.title}
                                                                                    <svg className="arrow-up" width={14} height={15} viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                        <path d="M9.91634 4.5835L4.08301 10.4168" strokeLinecap="round" strokeLinejoin="round" />
                                                                                        <path d="M4.66699 4.5835H9.91699V9.8335" strokeLinecap="round" strokeLinejoin="round" />
                                                                                    </svg>
                                                                                </Link>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </SwiperSlide>
                                                        ))}
                                                    </Swiper>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-12">
                                    <div className="card lets-talk-together-card pb-4">
                                        <div className="card-body">
                                            <div className="scrolling-info">
                                                <div className="slider-item">
                                                    <p>
                                                        Let’s Build Something Great 💻 Available for Hire 🚀 Building Web, CMS &amp; AI Apps 🤖 Let’s Create Something Powerful 🚀 Full-Stack Developer 💻
                                                    </p>
                                                </div>
                                            </div>
                                            <h3 className="card-title">Let's👋
                                                <span className="d-block">Work Together</span>
                                            </h3>
                                            <Link className="link-btn mb-3" to={CONTACT_ROUTE}> Let's Talk
                                                <svg className="icon" width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M17.5 11.6665V6.6665H12.5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                    <path d="M17.5 6.6665L10 14.1665L2.5 6.6665" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >

    )
}

export default Home