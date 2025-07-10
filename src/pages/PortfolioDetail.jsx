import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { PORTFOLIO_PROJECTS } from "../contants/siteData";
import { PORTFOLIO_ROUTE } from "../contants/routes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

function PortfolioDetail() {
  const params = useParams();
  const [project, setProject] = useState(null);
  const [navigationLink, setNavigationLink] = useState({ next: "", prev: "" });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const projectIndex = PORTFOLIO_PROJECTS.findIndex(
      (project) => project.slug === (params?.slug || "")
    );
    const hasProject = projectIndex !== -1;
    setProject(hasProject ? PORTFOLIO_PROJECTS[projectIndex] : null);
    setNavigationLink({
      next:
        PORTFOLIO_ROUTE +
        "/" +
        PORTFOLIO_PROJECTS[
          PORTFOLIO_PROJECTS.length - 1 === projectIndex ? 0 : projectIndex + 1
        ].slug,
      prev:
        PORTFOLIO_ROUTE +
        "/" +
        PORTFOLIO_PROJECTS[
          projectIndex === 0 ? PORTFOLIO_PROJECTS.length - 1 : projectIndex - 1
        ].slug,
    });
    setLoading(hasProject);
  }, [params]);

  return (
    <section className="content-box-area mt-4" id="portfolio-details">
      <div className="container">
        <div className="row g-4">
          <div className="col-xl-12">
            <div className="card content-box-card">
              <div className="card-body portfolio-card">
                <div className="media-showcase">
                  {(project?.image || []).slice(0, 5).map((img, index) => (
                    <div key={index} style={{ gridArea: `area${index + 1}` }}>
                      <img src={img} alt="" className="w-100 h-100 rounded" />
                    </div>
                  ))}
                  <div
                    style={{ gridArea: "area6" }}
                    className="client-info d-none d-lg-flex flex-column h-100"
                  >
                    <h4 className="text fw-bold fs-5">{project?.title}</h4>
                    <Link
                      className="mt-2 h-100"
                      to={project?.project_url}
                      target="_blank"
                    >
                      {project?.title}
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        className="ms-1"
                        fontSize={12}
                        style={{ rotate: "-45deg" }}
                      />
                    </Link>
                    <p className="text mt-3">Services:</p>
                    <h4 className="text fw-bold fs-5">{project?.services}</h4>
                  </div>
                </div>
                <div className="mt-3 row">
                  <div className="col-lg-3 client-info">
                    <div>
                      <p className="text">Client For:</p>
                      <h4 className="text fw-bold fs-5">{project?.title}</h4>
                    </div>
                    <div>
                      <p className="text mt-3">Services:</p>
                      <h4 className="text fw-bold fs-5">{project?.services}</h4>
                    </div>
                    <Link
                      className="mt-2"
                      to={project?.project_url}
                      target="_blank"
                    >
                      {project?.title}
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        className="ms-1"
                        fontSize={12}
                        style={{ rotate: "-45deg" }}
                      />
                    </Link>
                  </div>
                  <div className="col-lg-9">
                    <h4 className="mb-2 text fw-bold">Overview</h4>
                    <div>{project?.overview}</div>
                  </div>
                </div>
                <div className="row g-3 mt-4">
                  {(project?.image || []).slice(5).map((image, index) => (
                    <div className="col-lg-6">
                      <img
                        key={index}
                        src={image}
                        alt="project image"
                        className="rounded w-100"
                      />
                    </div>
                  ))}
                </div>
                <div>
                  <h4 className="my-4 text fw-bold">Challenges</h4>
                  <div>{project?.challenges}</div>
                </div>
                <div>
                  <h4 className="my-4 text fw-bold">Results/Conclusion:</h4>
                  <p className="text">{project?.description}</p>
                </div>
                <div className="mt-4 d-flex flex-column-reverse flex-md-row gap-3 next-prev-btn-group">
                  <Link
                    to={navigationLink?.prev || ""}
                    className="btn btn-transparent border p-3 fs-5 fw-bold w-100"
                  >
                    Previous
                  </Link>
                  <Link
                    to={navigationLink?.next || ""}
                    className="btn btn-transparent border p-3 fs-5 fw-bold w-100"
                  >
                    Next
                  </Link>
                </div>
                <div className="lets-talk-together-card mt-5">
                  <div className="scrolling-info">
                    <div className="slider-item">
                      <ul className="d-flex align-items-center gap-4 fs-5">
                        <li className="text">Let's 👋 Work Together</li>
                        <li className="text">Let's 👋 Work Together</li>
                        <li className="text">Let's 👋 Work Together</li>
                        <li className="text">Let's 👋 Work Together</li>
                        <li className="text">Let's 👋 Work Together</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PortfolioDetail;
