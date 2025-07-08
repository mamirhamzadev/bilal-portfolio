import { LETS_TALK_ICON } from "../contants/images"

function Contact() {
    return (
        <section className="content-box-area mt-4">
            <div className="container">
                <div className="row g-4">
                    <div className="col-xl-12">
                        <div className="card content-box-card">
                            <div className="card-body portfolio-card contact-card">
                                <div className="top-info">
                                    <div className="text">
                                        <h1 className="main-title">Let's 👋 <span>Work</span> Together</h1>
                                        <p>I don’t just write code — I build solutions that help businesses grow.</p>
                                    </div>
                                </div>
                                <div className="contact-area">
                                    <div className="leave-comments-area">
                                        <div className="comments-box">
                                            <form id="contact-form" action="#" method="POST">
                                                <div className="row gx-3">
                                                    <div className="col-md-6">
                                                        <div className="mb-4">
                                                            <label className="form-label">Name</label>
                                                            <input name="name" required type="text" className="form-control shadow-none" placeholder="Enter your name" />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="mb-4">
                                                            <label className="form-label">Email</label>
                                                            <input name="email" required type="email" className="form-control shadow-none" placeholder="Enter your email" />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="mb-4">
                                                            <label className="form-label">Project Type</label>
                                                            <select name="project_type" required className="form-control shadow-none">
                                                                <option value>Select a project type</option>
                                                                <option>Web App Development</option>
                                                                <option>Mobile App Development</option>
                                                                <option>AI/Chatbot Development</option>
                                                                <option>UI/UX Design</option>
                                                                <option>API Integration</option>
                                                                <option>Ongoing Support</option>
                                                                <option>Other</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="mb-4">
                                                            <label className="form-label">Timeline</label>
                                                            <input name="timeline" type="text" className="form-control shadow-none" placeholder="E.g. 4 weeks, ASAP, etc." />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="mb-4">
                                                            <label className="form-label">Project Budget</label>
                                                            <select name="project_budget" required className="form-control shadow-none">
                                                                <option value>Select your budget range</option>
                                                                <option value="<1000">Less than $1,000</option>
                                                                <option value="1000-5000">$1,000 – $5,000</option>
                                                                <option value="5000-10000">$5,000 – $10,000</option>
                                                                <option value="10000+">Over $10,000</option>
                                                                <option value="not_sure">Not sure yet</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="mb-4">
                                                            <label className="form-label">Preferred Method of Contact</label>
                                                            <select name="contact_method" className="form-control shadow-none">
                                                                <option value>Select an option</option>
                                                                <option>Email</option>
                                                                <option>Phone</option>
                                                                <option>Zoom/Call</option>
                                                                <option>WhatsApp</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div className="col-12">
                                                        <div className="mb-4">
                                                            <label className="form-label">Project Details</label>
                                                            <textarea name="project_details" rows={5} required className="form-control shadow-none" placeholder="Briefly describe your project or idea..." defaultValue={""} />
                                                        </div>
                                                    </div>
                                                    <div className="col-12">
                                                        <div className="mb-4 form-check">
                                                            <input type="checkbox" name="consent" required className="form-check-input cursor-pointer shadow-none" id="consentCheck" />
                                                            <label className="form-check-label cursor-pointer" htmlFor="consentCheck">
                                                                I consent to having this website store my submitted information so Muhammad Bilal can respond to my inquiry.
                                                            </label>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-12">
                                                        <button className="submit-btn" type="submit">
                                                            Send Message
                                                            <img src={LETS_TALK_ICON} alt="lets talk" />
                                                        </button>
                                                    </div>
                                                </div>
                                            </form>
                                            <p className="ajax-response mb-0" />
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

export default Contact