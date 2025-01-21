import Logo from "./assets/logo_cropped.png";
import Footer from "./footer";
import Header from "./header";
import Navigation from "./Navigation";
function App() {
  return (
    <>
      <body id="page-top">
        <Navigation />
        <Header />

        {/* <!-- About Section--> */}
        <section className="page-section portfolio" id="about">
          <div className="container">
            {/* <!-- About Section Heading--> */}
            {/* <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">
              About
            </h2> */}

            <div className="divider-custom divider-light">
              <div className="divider-custom-line"></div>
              <div className="divider-custom-icon">
                <i className="fas fa-star"></i>
              </div>
              <div className="divider-custom-line"></div>
            </div>
            {/* <!-- About Section Content--> */}
            <div className="row">
              <div className="ol-lg-12 ms-auto d-flex justify-content-center align-items-center">
                <img src={Logo} alt="Logo" />
              </div>
              <div className="col-lg-12 ms-auto">
                <p className="lead">
                  Ayurveda, ein traditionelles, aus Indien stammendes
                  Medizinsystem, konzentriert sich auf die Herstellung eines
                  Gleichgewichts zwischen Körper, Geist und Seele, um die
                  ganzheitliche Gesundheit zu fördern. Es basiert auf den
                  Grundsätzen der individuellen Pflege und verwendet natürliche
                  Heilmittel, Ernährungsempfehlungen und Lebensstilmaßnahmen,
                  die auf bestimmte Doshas- Vata, Pitta und Kapha -
                  zugeschnitten sind. Das Hauptziel von Aleyka ist es, die
                  Wellness- und Präventionsaspekte des Ayurveda zu fördern,
                  indem es hochwertige Wellness-Massagen von Therapeuten
                  anbietet, die eine spezielle Ausbildung in Ayurveda erhalten
                  haben.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- Contact Section--> */}
        {/* <section className="page-section" id="contact">
          <div className="container">
        
            <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">
              Contact Me
            </h2>
           
            <div className="divider-custom">
              <div className="divider-custom-line"></div>
              <div className="divider-custom-icon">
                <i className="fas fa-star"></i>
              </div>
              <div className="divider-custom-line"></div>
            </div>
            
            <div className="row justify-content-center">
              <div className="col-lg-8 col-xl-7">
                <form id="contactForm" data-sb-form-api-token="API_TOKEN">
                  <div className="form-floating mb-3">
                    <input
                      className="form-control is-invalid"
                      id="name"
                      type="text"
                      placeholder="Enter your name..."
                      data-sb-validations="required"
                      data-sb-can-submit="no"
                    />
                    <label htmlFor="name">Full name</label>
                    <div
                      className="invalid-feedback"
                      data-sb-feedback="name:required"
                    >
                      A name is required.
                    </div>
                  </div>
                 
                  <div className="form-floating mb-3">
                    <input
                      className="form-control is-invalid"
                      id="email"
                      type="email"
                      placeholder="name@example.com"
                      data-sb-validations="required,email"
                      data-sb-can-submit="no"
                    />
                    <label htmlFor="email">Email address</label>
                    <div
                      className="invalid-feedback"
                      data-sb-feedback="email:required"
                    >
                      An email is required.
                    </div>
                    <div
                      className="invalid-feedback"
                      data-sb-feedback="email:email"
                    >
                      Email is not valid.
                    </div>
                  </div>
                
                  <div className="form-floating mb-3">
                    <input
                      className="form-control"
                      id="phone"
                      type="tel"
                      placeholder="(123) 456-7890"
                      data-sb-validations="required"
                      data-sb-can-submit="no"
                    />
                    <label htmlFor="phone">Phone number</label>
                    <div
                      className="invalid-feedback"
                      data-sb-feedback="phone:required"
                    >
                      A phone number is required.
                    </div>
                  </div>
                
                  <div className="form-floating mb-3">
                    <input
                      className="form-control"
                      id="message"
                      type="text"
                      placeholder="Enter your message here..."
                      style={{ height: "10rem" }}
                      data-sb-validations="required"
                      data-sb-can-submit="no"
                    />
                    <label htmlFor="message">Message</label>
                    <div
                      className="invalid-feedback"
                      data-sb-feedback="message:required"
                    >
                      A message is required.
                    </div>
                  </div>

                  <div className="d-none" id="submitSuccessMessage">
                    <div className="text-center mb-3">
                      <div className="fw-bolder">
                        Form submission successful!
                      </div>
                      To activate this form, sign up at
                      <br />
                      <a href="https://startbootstrap.com/solution/contact-forms">
                        https://startbootstrap.com/solution/contact-forms
                      </a>
                    </div>
                  </div>

                  <div className="d-none" id="submitErrorMessage">
                    <div className="text-center text-danger mb-3">
                      Error sending message!
                    </div>
                  </div>

                  <button
                    className="btn btn-primary btn-xl disabled"
                    id="submitButton"
                    type="submit"
                  >
                    Send
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section> */}

        <Footer />
        {/* <!-- Copyright Section--> */}
      </body>
    </>
  );
}

export default App;
