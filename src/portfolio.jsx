import { useState } from "react";
import Navigation from "./Navigation";
import Footer from "./footer";
import Header from "./header";
import BG from "./assets/b1.jpg";
import BookNowModal from "./booknow";
const PortFolio = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);
  return (
    <>
      <body id="page-top">
        <nav
          className="navbar navbar-expand-lg bg-secondary text-uppercase fixed-top"
          id="mainNav"
        >
          <div className="container">
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
          <div className="container">
            <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">
              Massages
            </h2>
            <div className="divider-custom">
              <div className="divider-custom-line"></div>
              <div className="divider-custom-icon">
                <i className="fas fa-star"></i>
              </div>
              <div className="divider-custom-line"></div>
            </div>
            <div class="row justify-content-center">
              <div class="col-md-6 col-lg-6 mb-5">
                <div className="card mx-auto" style={{ width: "100%" }}>
                  <img
                    className="card-img-top img-fluid"
                    src={BG}
                    alt="Portfolio Item"
                  />
                  <div className="card-body text-center">
                    <h5 className="card-title">Ayurveda consultation</h5>
                    <p className="card-text">
                      ayurveda consultation with ayurveda specialist - 90 min
                      -199euro
                    </p>
                    <button
                      className="btn btn-primary"
                      data-bs-toggle="modal"
                      data-bs-target="#portfolioModal6"
                      onClick={() => openModal(true)}
                    >
                      Book Now
                    </button>
                  </div>
                </div>
              </div>

              <div class="col-md-6 col-lg-6 mb-5">
                <div className="card mx-auto" style={{ width: "100%" }}>
                  <img
                    className="card-img-top img-fluid"
                    src={BG}
                    alt="Portfolio Item"
                  />
                  <div className="card-body text-center">
                    <h5 className="card-title">Massage 1</h5>
                    <p className="card-text">
                      Massage 1(40min abyanga +20min padaabyanga) -99euro
                    </p>
                    <button
                      className="btn btn-primary"
                      data-bs-toggle="modal"
                      data-bs-target="#portfolioModal6"
                      onClick={() => openModal(true)}
                    >
                      Book Now
                    </button>
                  </div>
                </div>
              </div>

              <div class="col-md-6 col-lg-6 mb-5">
                <div className="card mx-auto" style={{ width: "100%" }}>
                  <img
                    className="card-img-top img-fluid"
                    src={BG}
                    alt="Portfolio Item"
                  />
                  <div className="card-body text-center">
                    <h5 className="card-title">Massage 2</h5>
                    <p className="card-text">
                      Massage 2(40min abyanga+30min padaabyanga+20min
                      mukhaabyanga) -149euro
                    </p>
                    <button
                      className="btn btn-primary"
                      data-bs-toggle="modal"
                      data-bs-target="#portfolioModal6"
                      onClick={() => openModal(true)}
                    >
                      Book Now
                    </button>
                  </div>
                </div>
              </div>

              <div class="col-md-6 col-lg-6 mb-5 mb-lg-0">
                <div className="card mx-auto" style={{ width: "100%" }}>
                  <img
                    className="card-img-top img-fluid"
                    src={BG}
                    alt="Portfolio Item"
                  />
                  <div className="card-body text-center">
                    <h5 className="card-title">Massage 3</h5>
                    <p className="card-text">
                      Massage 3(40min abyanga+30min padaabyanga+30min)
                    </p>
                    <button
                      className="btn btn-primary"
                      data-bs-toggle="modal"
                      data-bs-target="#portfolioModal6"
                      onClick={() => openModal(true)}
                    >
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="row">
              <div className="col-lg-12 ms-auto">
                <p className="lead bold">Please see the flyer also</p>
                <p className="lead bold">
                  in the beginning there are only 4 services at aleyka
                </p>

               
                
              </div>
            </div> */}
          </div>
          <br />
          <br />
          <br />
          {/* <div className="container">
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
              <div className="col-lg-6 ms-auto">
                <p className="lead bold">Abyanga(Ayurveda-Ganzkörpermassage)</p>
                <p className="lead">
                  Abhyanga ist eine erstaunliche, alte ayurvedische Praxis.
                  Dabei handelt es sich um eine wunderbare Form der
                  Selbstpflege, bei der eine Ganzkörpermassage mit warmen
                  Kräuterölen durchgeführt wird. Diese zutiefst therapeutische
                  Technik ist genau das Richtige, um Ihre Haut zu nähren und Ihr
                  allgemeines Wohlbefinden zu fördern. Dabei werden die Doshas
                  des Körpers - Vata, Pitta und Kapha - ausgeglichen. Die
                  Massage wird in einer ruhigen und gelassenen Umgebung
                  durchgeführt, damit die Öle tief in das Gewebe eindringen und
                  die Durchblutung fördern, die Gesundheit der Gelenke
                  verbessern und Giftstoffe ausscheiden können. Abhyanga kann
                  Stress abbauen, die geistige Klarheit verbessern und einen
                  erholsamen Schlaf fördern.
                </p>
              </div>
              <div className="col-lg-6 ms-auto">
                <p className="lead bold">Pada abyanga (Ayurveda-Fußmassage)</p>
                <p className="lead">
                  Haben Sie schon einmal eine Ayurveda-Fußmassage ausprobiert?
                  Es ist eine fantastische, tief entspannende Therapie, die auf
                  dem alten indischen System der ganzheitlichen Medizin basiert.
                  Sie wird Padabhyanga genannt und ist eine wahre Wohltat für
                  die Füße! Diese wunderbare Praxis konzentriert sich auf die
                  Füße, die im Ayurveda als Spiegelbild der allgemeinen
                  Gesundheit und des Wohlbefindens des Körpers betrachtet
                  werden. Die rhythmischen und sanften Ausstreichungen sind
                  genau das Richtige, um Ihre Muskeln zu entspannen, und sie
                  stimulieren auch die vitalen Energiepunkte, was eine bessere
                  Durchblutung und Entgiftung fördert. Wenn Sie Padabhyanga
                  regelmäßig praktizieren, werden Sie feststellen, dass es Ihre
                  Schlafqualität verbessert, Stress abbaut und Ihre Sehkraft
                  durch die Harmonisierung von Körper und Geist verbessert.
                  Dieser ganzheitliche Ansatz für das Wohlbefinden betont die
                  Vernetzung der Körpersysteme und die Bedeutung der Erhaltung
                  des Gleichgewichts für eine optimale Gesundheit.
                </p>
              </div>
              <div className="col-lg-6 ms-auto">
                <p className="lead bold">
                  Mugha abyanga (Ayurveda-Gesichtsmassage)
                </p>
                <p className="lead">
                  Die Ayurveda-Gesichtsmassage ist eine unglaubliche, uralte
                  Praxis, deren Wurzeln in den ganzheitlichen Heiltraditionen
                  Indiens liegen. Sie wurde entwickelt, um die Haut zu verjüngen
                  und das allgemeine Wohlbefinden zu fördern, und sie ist
                  absolut erstaunlich! Diese Praxis ist eine wahre Freude! Mit
                  warmen Kräuterölen, die auf die individuelle
                  Dosha-Konstitution abgestimmt sind, wird das Gesicht sanft
                  massiert, um den Kreislauf anzuregen und die Lymphdrainage zu
                  fördern. Die rhythmischen, beruhigenden Bewegungen sind
                  einfach göttlich! Sie helfen, Verspannungen zu lösen, Fältchen
                  zu reduzieren und den Hauttonus zu verbessern, während die
                  aromatischen Öle die Haut nähren und mit Feuchtigkeit
                  versorgen.
                </p>
              </div>
              <div className="col-lg-6 ms-auto">
                <p className="lead bold">Shiroabyanga(Ayurveda-Kopfmassage)</p>
                <p className="lead">
                  Kopfmassagen mit Kräuteröl sind die beste Art, sich zu
                  entspannen und besser zu fühlen. Sie sind ein ganzheitlicher
                  Ansatz für Entspannung und Wellness. Mit Ayurveda-Kräutern
                  versetzte Kräuteröle verbessern das Erlebnis und bieten
                  zusätzliche Vorteile für Kopfhaut und Haar. Diese Öle sind für
                  ihre beruhigenden Eigenschaften bekannt. Sie fördern
                  körperliche Entspannung, geistige Klarheit und Stressabbau.
                  Eine Kopfmassage verbessert die Blutzirkulation, stimuliert
                  die Haarfollikel und unterstützt ein gesundes Haarwachstum.
                  Das Aroma der Kräuteröle trägt zu einem meditativen Erlebnis
                  bei und macht die Kopfmassage zu einem verjüngenden Ritual,
                  das Körper und Geist gleichermaßen nährt. Ganz gleich, ob Sie
                  nach Linderung von Spannungskopfschmerzen suchen oder sich
                  einfach nur einen Moment der Ruhe gönnen möchten, eine
                  Kopfmassage mit Kräuteröl ist eine zutiefst befriedigende
                  Praxis der Selbstfürsorge.
                </p>
              </div>
            </div>
          </div> */}
        </section>
        <Footer />
        <BookNowModal modalIsOpen={modalIsOpen} closeModal={closeModal} />
      </body>
    </>
  );
};
export default PortFolio;