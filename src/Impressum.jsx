import Footer from "./footer";
import Header from "./header";

import Navigation from "./Navigation";
const Impressum = () => {
  return (
    <>
      <body id="page-top">
        <Navigation />
        <Header />
        <section className="page-section portfolio" id="portfolio">
          {" "}
          <div className="container">
            <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">
              Impressum
            </h2>
            <div className="divider-custom">
              <div className="divider-custom-line"></div>
              <div className="divider-custom-icon">
                <i className="fa fa-star"></i>
              </div>
              <div className="divider-custom-line"></div>
            </div>

            {/* <div className="row">
              <div className="col-lg-12 ms-auto">
                <div className="container">
                  <p className="lead">
                    <b style={{ fontWeight: "bold" }}>
                      Datenerfassung auf dieser Website Wer ist verantwortlich
                      für die Datenerfassung auf dieser Website?
                    </b>
                  </p>
                </div>
              </div>
              <div className="col-lg-12 ms-auto">
                <div className="container">
                  <p className="lead">
                    Die Datenverarbeitung auf dieser Website erfolgt durch den
                    Websitebetreiber. Dessen Kontaktdaten können Sie dem
                    Abschnitt „Hinweis zur Verantwortlichen Stelle“ in dieser
                    Datenschutzerklärung entnehmen.
                    <br />
                    <br />
                  </p>
                </div>
              </div>
            </div> */}
          </div>
          <div className="container">
            <div className="row">
              {/* <!-- Footer Location--> */}
              <div className="col-lg-4 mb-5 mb-lg-0">
                <h4 className="text-uppercase mb-4">Impressum</h4>
                <p className="lead mb-0">
                  Akhil Sugathan Amrutha
                  <br />
                  Aleyka Ayurveda
                  <br />
                  Weststrasse 37
                  <br />
                  57392 Schmallenberg
                  {/* Clark, MO 65243 */}
                </p>
              </div>

              <div className="col-lg-4 mb-5 mb-lg-0">
                <h4 className="text-uppercase mb-4">Kontakt</h4>
                <p className="lead mb-0">
                  Email: info@aleykaayurveda.de
                  <br />
                  Kontaktnummer: +49 1605607278
                  {/* <a href="http://startbootstrap.com">Start Bootstrap</a>. */}
                </p>
              </div>
              <div className="col-lg-4">
                <h4 className="text-uppercase mb-4">
                  Redaktionell verantwortlich
                </h4>
                <p className="lead mb-0">
                  Akhil Sugathan Amrutha
                  <br />
                  Aleyka Ayurveda
                  <br />
                  Weststrasse 37
                  <br />
                  57392 Schmallenberg
                  <br />
                  <br />
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12 ms-auto">
                <div className="container">
                  <p className="lead">
                    <b style={{ fontWeight: "bold" }}>EU-Streitschlichtung</b>
                  </p>
                </div>
              </div>
              <div className="col-lg-12 ms-auto">
                <div className="container">
                  <p className="lead">
                    Die Europäische Kommission stellt eine Plattform zur
                    Online-Streitbeilegung (OS) bereit:
                    <a href="https://ec.europa.eu/consumers/odr">
                      https://ec.europa.eu/consumers/odr/.
                    </a>
                    <br />
                    Unsere E-Mail-Adresse finden Sie oben im Impressum.
                    <br />
                    <br />
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12 ms-auto">
                <div className="container">
                  <p className="lead">
                    <b style={{ fontWeight: "bold" }}>
                      Verbraucherstreitbeilegung/ Universalschlichtungsstelle
                    </b>
                  </p>
                </div>
              </div>
              <div className="col-lg-12 ms-auto">
                <div className="container">
                  <p className="lead">
                    Wir sind nicht bereit oder verpflichtet, an
                    Streitbeilegungsverfahren vor einer
                    Verbraucherschlichtungsstelle teilzunehmen.
                    <br />
                    <br />
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12 ms-auto">
                <div className="container">
                  <p className="lead">
                    <b style={{ fontWeight: "bold" }}>
                      Zentrale Kontaktstelle nach dem Digital Services Act - DSA
                      <br />
                      (Verordnung (EU) 2022/265)
                    </b>
                  </p>
                </div>
              </div>
              <div className="col-lg-12 ms-auto">
                <div className="container">
                  <p className="lead">
                    Unsere zentrale Kontaktstelle für Nutzer und Behörden nach
                    Art. 11, 12 DSA erreichen Sie wie folgt:
                    <br />
                    E-Mail: info@aleykaayurveda.de Telefon: 0160 5607278
                    <br />
                    Sonstige Kontaktwege:
                    <br />
                    Aleyka Ayurveda
                    <br />
                    Weststrasse 37
                    <br />
                    57392 Schmallenberg
                    <br />
                    Die für den Kontakt zur Verfügung stehenden Sprachen sind:
                    Deutsch,
                    <br />
                    <br />
                  </p>
                </div>
              </div>
            </div>
          </div>
          <br />
          <br />
          <br />
        </section>
        <Footer />
      </body>
    </>
  );
};
export default Impressum;
