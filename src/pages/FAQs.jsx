import { MINUS_ICON, PLUS_ICON } from "../contants/images"
import { FAQs_DATA } from "../contants/siteData"

function FAQs() {
    return (
        <section className="content-box-area mt-4">
            <div className="container">
                <div className="row g-4">
                    <div className="col-xl-12">
                        <div className="card content-box-card">
                            <div className="card-body">
                                <div className="mt-0 frequently-asked-questions">
                                    <h2 className="main-common-title">Frequently Asked Questions
                                    </h2>
                                    <div className="frequently-asked-questions-main">
                                        <div className="accordion" id="accordionExample">
                                            {FAQs_DATA.map((faq, index) => (
                                                <div key={index} className="accordion-item">
                                                    <h4 className="accordion-header" id={`heading${index}`}>
                                                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target={`#collapse${index}`} aria-expanded="true" aria-controls={`collapse${index}`}>
                                                            {faq.title}
                                                            <span className="ms-auto">
                                                                <span className="icon ms-4">
                                                                    <img className="icon-plus" src={PLUS_ICON} alt="plus" />
                                                                    <img className="icon-minus d-none" src={MINUS_ICON} alt="minus" />
                                                                </span>
                                                            </span>
                                                        </button>
                                                    </h4>
                                                    <div id={`collapse${index}`} className="accordion-collapse collapse show" aria-labelledby={`heading${index}`} data-bs-parent="#accordionExample">
                                                        <div className="accordion-body">{faq.description}</div>
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
            </div>
        </section>

    )
}

export default FAQs