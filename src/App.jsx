import Logo from "./assets/logo_cropped.png";
import Footer from "./footer";
import Header from "./header";
import Navigation from "./Navigation";
import Gallery from "./Gallery";

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
                <i className="fa fa-star"></i>
              </div>
              <div className="divider-custom-line"></div>
            </div>
            {/* <!-- About Section Content--> */}
            <div className="row">
              <div className="ol-lg-12 ms-auto d-flex justify-content-center align-items-center">
                <img src={Logo} alt="Logo" />
              </div>
              <div className="col-lg-12 ms-auto mt-5">
                <p className="lead">
                  Ayurveda, ein traditionelles, aus Indien stammendes
                  Medizinsystem, konzentriert sich auf die Herstellung eines
                  Gleichgewichts zwischen Körper, Geist und Seele, um die
                  ganzheitliche Gesundheit zu fördern. Es basiert auf den
                  Grundsätzen der individuellen Pflege und verwendet natürliche
                  Heilmittel, Ernährungsempfehlungen und Lebensstilmaßnahmen,
                  die auf bestimmte Doshas- Vata, Pitta und Kapha -
                  zugeschnitten sind.
                  <br />
                  <br />
                  Das Hauptziel von Aleyka ist es, die Wellness- und
                  Präventionsaspekte des Ayurveda zu fördern, indem es
                  hochwertige Wellness-Massagen von Therapeuten anbietet, die
                  eine spezielle Ausbildung in Ayurveda erhalten haben.
                </p>
              </div>
            </div>
          </div>
          <Gallery />
        </section>

        <Footer />
        {/* <!-- Copyright Section--> */}
      </body>
    </>
  );
}

export default App;
