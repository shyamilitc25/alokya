const Footer = () => {
  return (
    <>
      <footer className="footer text-center">
        <div className="container">
          <div className="row">
            {/* <!-- Footer Location--> */}
            <div className="col-lg-4 mb-5 mb-lg-0">
              <h4 className="text-uppercase mb-4">Location</h4>
              <p className="lead mb-0">
                0160 5607278
                <br />
                Weststr 3757392
                <br />
                Schmallenberg
                {/* Clark, MO 65243 */}
              </p>
            </div>
            {/* <!-- Footer Social Icons--> */}
            {/* <div className="col-lg-4 mb-5 mb-lg-0">
              <h4 className="text-uppercase mb-4">Around the Web</h4>
              <a className="btn btn-outline-light btn-social mx-1" href="#!">
                <i className="fab fa-fw fa-facebook-f"></i>
              </a>
              <a className="btn btn-outline-light btn-social mx-1" href="#!">
                <i className="fab fa-fw fa-twitter"></i>
              </a>
              <a className="btn btn-outline-light btn-social mx-1" href="#!">
                <i className="fab fa-fw fa-linkedin-in"></i>
              </a>
              <a className="btn btn-outline-light btn-social mx-1" href="#!">
                <i className="fab fa-fw fa-dribbble"></i>
              </a>
            </div> */}
            {/* <!-- Footer About Text--> */}
            <div className="col-lg-4">
              <h4 className="text-uppercase mb-4">Contact Us</h4>
              <p className="lead mb-0">
                Email:info@aleykaayurveda.de
                <br />
                Kontaktnummer:+49 1605607278
                {/* <a href="http://startbootstrap.com">Start Bootstrap</a>. */}
              </p>
            </div>
            <div className="col-lg-4">
              <h4 className="text-uppercase mb-4">Timing</h4>
              <p className="lead mb-0">
                öffnungszeiten
                <br />
                dienstags bis samstags von 9.00 bis 19.00 Uhr
                <br />
                Sonntag und Montag geschlossen
                {/* <a href="http://startbootstrap.com">Start Bootstrap</a>. */}
              </p>
            </div>
          </div>
        </div>
      </footer>

      <div className="copyright py-4 text-center text-white">
        <div className="container">
          <small>Copyright &copy; Your Website 2023</small>
        </div>
      </div>

      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"></script>
      {/* <!-- Core theme JS--> */}
      <script src="js/scripts.js"></script>
      <script src="https://cdn.startbootstrap.com/sb-htmlForms-latest.js"></script>
    </>
  );
};
export default Footer;
