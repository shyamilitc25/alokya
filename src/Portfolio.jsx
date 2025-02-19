import { useState, useEffect } from "react";
import Navigation from "./Navigation";
import Footer from "./footer";
import Header from "./header";
import BookNowModal from "./BookNowModal";
import Logo from "./assets/logo.png";
import { useSupabase } from "./SupabaseContext";
const PortFolio = () => {
  const [massages, setMassages] = useState([]);
  const supabase = useSupabase();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const openModal = () => setModalIsOpen(true);
  const closeModal = () => {
    setSelectedMassageId(null);
    setSelectedMassageName("");
    setSelectedMassageDur("");
    setModalIsOpen(false);
  };
  const [selectedMassageId, setSelectedMassageId] = useState(null);
  const [selectedMassageName, setSelectedMassageName] = useState("");
  const [selectedMassageDur, setSelectedMassageDur] = useState("");
  useEffect(() => {
    const fetchTimeSlots = async () => {
      const { data, error } = await supabase
        .from("massages")
        .select("*")
        .order("created_at", { ascending: true });

      if (error) {
        console.error("Error fetching time slots:", error.message);
      } else {
        setMassages(data);
      }
    };

    fetchTimeSlots();
  }, []);
  console.log({ massages });
  return (
    <>
      <body id="page-top">
        <Navigation />
        <Header />
        <section className="page-section portfolio" id="portfolio">
          <div className="container">
            <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">
              Massagen
            </h2>
            <div className="divider-custom">
              <div className="divider-custom-line"></div>
              <div className="divider-custom-icon">
                <i className="fa fa-star"></i>
              </div>
              <div className="divider-custom-line"></div>
            </div>
            <p className="lead">
              Sie können Ihre Massage online buchen / Schreiben Sie uns eine
              E-Mail oder rufen Sie uns an
              <br />
              <br />
              Wir bieten 4 Massagepakete an, um Ihnen eine bessere Entspannung
              zu ermöglichen.
              <br />
              <br />
              (individuelle Vorlieben können direkt mit dem Therapeuten
              besprochen werden und er kann Ihr Paket entsprechend planen)
              <br />
              <br />
            </p>
            <div className="row justify-content-center">
              {massages?.map((massage) => (
                <div className="col-md-3 col-lg-3 col-ls-12 mb-5">
                  <div className="card h-100 mx-auto" style={{ width: "100%" }}>
                    <img
                      className="card-img-top img-fluid"
                      src={massage?.img_url}
                      alt="Portfolio Item"
                    />
                    <div className="card-body text-center d-flex flex-column">
                      <h5 className="card-title">{massage?.massage_name}</h5>
                      <div className="card-desc-div">
                        <p
                          className="card-text"
                          style={{ textAlign: "left" }}
                          dangerouslySetInnerHTML={{
                            __html:
                              massage?.massage_desc?.replace(/\n/g, "<br/>") ||
                              "No description available",
                          }}
                        />
                      </div>

                      <br />
                      <div className="card-desc-div">
                        <h5 className="card-title">€{massage?.price}</h5>
                      </div>

                      {/* <p className="card-text">
                        {massage?.massage_desc} - €{massage?.price}
                      </p> */}
                      <button
                        className="btn btn-primary mt-auto"
                        data-bs-toggle="modal"
                        data-bs-target="#portfolioModal6"
                        onClick={() => {
                          setSelectedMassageId(massage.id);
                          setSelectedMassageName(massage?.massage_name);
                          setSelectedMassageDur(massage?.massage_desc);
                          openModal(true);
                        }}
                      >
                        Massage Buchen
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <br />
          <br />
          <br />
        </section>
        <Footer />
        <BookNowModal
          modalIsOpen={modalIsOpen}
          closeModal={closeModal}
          massageId={selectedMassageId}
          massageName={selectedMassageName}
          massageDur={selectedMassageDur}
        />
      </body>
    </>
  );
};
export default PortFolio;
