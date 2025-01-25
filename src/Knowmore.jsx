import { useEffect, useState } from "react";
import Footer from "./footer";
import Header from "./header";
import Consultation from "./assets/consultation_with_specialist.jpg";
import Logo from "./assets/logo.png";
import { useSupabase } from "./SupabaseContext";
import { useNavigate } from "react-router-dom";
import Navigation from "./Navigation";
const KnowMore = () => {
  const [massages, setMassages] = useState([]);
  const supabase = useSupabase();
  const navigate = useNavigate();
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
  return (
    <>
      <body id="page-top">
        <Navigation />
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
        </section>
        <Footer />
      </body>
    </>
  );
};
export default KnowMore;
