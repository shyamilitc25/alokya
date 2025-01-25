import { useEffect, useState } from "react";
import { useSupabase } from "./SupabaseContext";
import Header from "./header";
import Navigation from "./Navigation";
import Footer from "./footer";
import { useNavigate } from "react-router-dom";
const Massages = () => {
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
        <section className="page-section portfolio" id="massages">
          {" "}
          <br />
          <br />
          <br />
          <div className="container">
            <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">
              Unsere Massagen
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
                      Abyanga hilft, Ihre Vata- Bewegungen zu regulieren und den
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
              <p
                className="card-text"
                style={{ fontWeight: "bold", color: "#000", fontSize: "20px" }}
              >
                diese Massagen bieten wir als 4 Pakete für Ihre bessere
                Entspannung.
              </p>
            </div>
          </div>
          <br />
          <br />
          <div className="row justify-content-center">
            {massages?.map((massage) => (
              <div className="col-md-3 col-lg-3 col-ls-12 mb-5">
                <div className="card h-100 mx-auto" style={{ width: "100%" }}>
                  <img
                    className="card-img-top img-fluid"
                    src={massage?.img_url}
                    alt="Portfolio Item"
                  />
                </div>
              </div>
            ))}
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <button
              className="btn btn-primary mt-auto"
              style={{ width: "20%" }}
              onClick={() => navigate("/massage_buchen")}
            >
              Book Now
            </button>
          </div>
          {/* <Gallery /> */}
        </section>
        <Footer />
      </body>
    </>
  );
};
export default Massages;
