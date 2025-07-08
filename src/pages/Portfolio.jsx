import { faArrowRight, faPlus } from "@fortawesome/free-solid-svg-icons"
import { PORTFOLIO_PROJECTS } from "../contants/siteData"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

function Portfolio() {
    return (
        <section className="content-box-area mt-4">
            <div className="container">
                <div className="row g-4">
                    <div className="col-xl-12">
                        <div className="card content-box-card">
                            <div className="card-body portfolio-card">
                                <div className="top-info">
                                    <div className="text">
                                        <h1 className="main-title">Check Out My Latest <span>Projects</span></h1>
                                        <p>Curious about what I’ve built? Dive into my interactive portfolio where code meets creativity. From AI-powered platforms to sleek web apps, it’s all there — polished, purposeful, and performance-driven.</p>
                                    </div>
                                </div>
                                <div className="portfolio-area">
                                    <div className="row g-4 parent-container">
                                        {PORTFOLIO_PROJECTS.map((project, index) => (
                                            <div key={index} className="col-lg-6">
                                                <div className="portfolio-item">
                                                    <div className="image">
                                                        <img src={project.image} alt="project-1" className="img-fluid w-100" />
                                                        <a href={project.path} className="gallery-popup full-image-preview parent-container">
                                                            <FontAwesomeIcon icon={faPlus} />
                                                        </a>
                                                    </div>
                                                    <div className="text pb-0">
                                                        <div className="info">
                                                            <a href={project.project_url} className="title">{project.title}</a>
                                                            <p className="subtitle">{project.subTitle}</p>
                                                        </div>
                                                        <div className="visite-btn">
                                                            <a target="_blank" href={project.project_url} style={{ minWidth: "70px" }}>Visit Site&nbsp;&nbsp;
                                                                <FontAwesomeIcon fontSize={12} icon={faArrowRight} style={{ rotate: "-45deg" }} />
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className="text pt-2">
                                                        <div className="info"> <p className="subtitle">{project.description}</p>
                                                        </div>
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
        </section>

    )
}

export default Portfolio