import Footer from "./footer";
import Header from "./header";
import Consultation from "./assets/consultation_with_specialist.jpg";
import Logo from "./assets/logo.png";
import Gallery from "./Gallery";
const KnowMore = () => {
  return (
    <>
      <body id="page-top">
        <nav
          className="navbar navbar-expand-lg bg-secondary text-uppercase fixed-top"
          id="mainNav"
        >
          <div className="container">
            <img
              className="masthead-logo me-3"
              src={Logo} // Replace `Logo` with your image path or import
              alt="Logo"
              style={{ width: "50px", height: "50px" }} // Adjust size as needed
            />
            <a className="navbar-brand" href="#page-top">
              Aleyka Ayurveda
            </a>

            <button
              className="navbar-toggler text-uppercase font-weight-bold bg-primary text-white rounded"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarResponsive"
              aria-controls="navbarResponsive"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              Menu
              <i className="fas fa-bars"></i>
            </button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item mx-0 mx-lg-1">
                  <a className="nav-link py-3 px-0 px-lg-3 rounded" href="/">
                    Home
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <Header />
        <section className="page-section portfolio" id="portfolio">
          {" "}
          <div className="container">
            <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">
              AYURVEDA-BERATUNG MIT AKHIL SUGATHAN AMRUTHA
            </h2>
            <div className="divider-custom">
              <div className="divider-custom-line"></div>
              <div className="divider-custom-icon">
                <i className="fas fa-star"></i>
              </div>
              <div className="divider-custom-line"></div>
            </div>
            <div className="row">
              <div className="col-lg-12 ms-auto">
                <div className="consultation-container">
                  <img
                    src={Consultation}
                    className="consultation-img"
                    alt="Consultation"
                  />
                  <p className="lead">
                    Akhil Sugathan Amrutha ist ein AyurvedaSpezialist aus
                    Indien. Er hat seinen BachelorAbschluss in Ayurveda an der
                    Universität Goa in Indien gemacht. Seit 2016 hat er in
                    verschiedenen ayurvedabezogenen Funktionen in Deutschland
                    gearbeitet. Seit 2021 ist er als Ayurveda-Spezialist im
                    AyurvedaZentrum Bad Berleburg tätig
                    <br />
                    <br />
                    {/* </p>
                  <p className="lead"> */}
                    In der 90-minütigen Konsultation wird Herr Amrutha Ihre
                    Prakruti (Konstitution) und den Grad des
                    Dosha-Ungleichgewichts (Vata, Pitta, Kapha) im Körper
                    bestimmen. Anschließend wird er spezifische Änderungen
                    empfehlen, die Sie umsetzen können, einschließlich
                    Ernährungsänderungen, Yogaübungen und Pranayama
                    <br />
                    <br />
                    {/* <b> */}
                    <b style={{ fontWeight: "bold" }}>
                      {" "}
                      (* Bitte beachten Sie, dass diese Konsultation keinen Arzt
                      oder Heilpraktiker ersetzt.)
                    </b>
                    <br />
                    <br />
                    Bitte schreiben Sie uns oder rufen Sie uns an, um einen
                    Termin zu vereinbaren
                    {/* </b> */}
                  </p>
                </div>
                {/* <p className="lead">
                  * Bitte beachten Sie, dass diese Konsultation keinen Arzt oder
                  Heilpraktiker ersetzt
                </p> */}
              </div>
            </div>
          </div>
          <br />
          <br />
          <br />
          <div className="container">
            <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">
              Details
            </h2>
            <div className="divider-custom">
              <div className="divider-custom-line"></div>
              <div className="divider-custom-icon">
                <i className="fas fa-star"></i>
              </div>
              <div className="divider-custom-line"></div>
            </div>
            <div className="row">
              <div class="col-md-12 col-lg-12 mb-5 d-flex align-items-stretch">
                <div
                  className="card mx-auto"
                  style={{ width: "100%", border: "0px white" }}
                >
                  <div className="card-body text-center">
                    <h5 className="card-title">Abyanga (Ganzkörpermassage)</h5>
                    <p className="card-text">
                      Abyanga ist die ayurvedische Ganzkörpermassage. Während
                      der 40-minütigen Abyanga konzentriert sich der Therapeut
                      auf lange, rhythmische Streichungen und stimuliert
                      gleichzeitig Ihre Marmapunkte (Marmapunkte sind spezielle
                      Punkte in Ihrem Körper, die, wenn sie stimuliert werden,
                      zur Entspannung Ihrer Doshas führen können). Regelmäßiges
                      Abyanga hilft, Ihre Vata-Bewegungen zu regulieren und den
                      Schlaf zu verbessern.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-md-12 col-lg-12 mb-5 d-flex align-items-stretch">
                <div
                  className="card mx-auto"
                  style={{ width: "100%", border: "0px white" }}
                >
                  <div className="card-body text-center">
                    <h5 className="card-title">Padaabyanga(Fußmassage)</h5>
                    <p className="card-text">
                      Die ayurvedische Fußmassage ist als Pada Abhyanga bekannt.
                      Der Therapeut beginnt mit Ihrem rechten Fuß, führt
                      entspannende kreisende Bewegungen aus und stimuliert die
                      Marmapunkte. Das Gleiche wird dann mit dem linken Fuß
                      gemacht. Ayurveda betont die Bedeutung des Einölens der
                      Füße, das hilft, Stress zu regulieren und guten Schlaf zu
                      fördern.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-12 col-lg-12 mb-5 d-flex align-items-stretch">
                <div
                  className="card mx-auto"
                  style={{ width: "100%", border: "0px white" }}
                >
                  <div className="card-body text-center">
                    <h5 className="card-title">
                      Mukhaabyanga(Gesichtsmassage)
                    </h5>
                    <p className="card-text">
                      Mugha Abyanga ist eine ayurvedische Gesichtsmassage, bei
                      der der Therapeut mit sanften Streichungen
                      Muskelverspannungen löst und die Entgiftung der Haut
                      fördert.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-12 col-lg-12 mb-5 d-flex align-items-stretch">
                <div
                  className="card mx-auto"
                  style={{ width: "100%", border: "0px white" }}
                >
                  <div className="card-body text-center">
                    <h5 className="card-title">Shiroabyanga(Kopf Massage)</h5>
                    <p className="card-text">
                      Bei der Shiroabhyanga-Massage wird Öl auf Kopf und Nacken
                      aufgetragen. Die Massage beginnt mit sanften Streichungen.
                      Die Shiroabhyanga hilft, Stress abzubauen und die
                      Blutzirkulation zu verbessern. Außerdem hilft sie Ihnen,
                      besser zu schlafen.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Gallery />
        </section>
        <Footer />
      </body>
    </>
  );
};
export default KnowMore;
