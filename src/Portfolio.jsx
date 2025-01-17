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
    setModalIsOpen(false);
  };
  const [selectedMassageId, setSelectedMassageId] = useState(null);
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
                      <p className="card-text">
                        {massage?.massage_desc} - €{massage?.price}
                      </p>
                      <button
                        className="btn btn-primary mt-auto"
                        data-bs-toggle="modal"
                        data-bs-target="#portfolioModal6"
                        onClick={() => {
                          setSelectedMassageId(massage.id);
                          openModal(true);
                        }}
                      >
                        Book Now
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
        />
      </body>
    </>
  );
};
export default PortFolio;
