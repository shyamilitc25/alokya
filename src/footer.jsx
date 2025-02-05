const Footer = () => {
  return (
    <>
      <footer className="footer text-center">
        <div className="container">
          <div className="row">
            {/* <!-- Footer Location--> */}
            <div className="col-lg-4 mb-5 mb-lg-0">
              <h4 className="text-uppercase mb-4">Sie finden uns in der</h4>
              <p className="lead mb-0">
                Weststraße 37
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
              <h4 className="text-uppercase mb-4">Öffnungszeiten</h4>
              <p className="lead mb-0">
                dienstags bis samstags von 9.00 bis 19.00 Uhr Sonntag und Montag
                geschlossen
              </p>
            </div>
          </div>
        </div>
      </footer>

      <div className="copyright py-4 text-center text-white">
        <div className="container">
          <small>Copyright &copy; Your Website 2023</small>
          <a href="/datenschutzerklärung"> Datenschutz </a> &
          <a href="/impressum"> Impressum</a>
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
