const Navigation = () => {
  return (
    <>
      {/* <!-- Navigation--> */}
      <nav
        className="navbar navbar-expand-lg bg-secondary text-uppercase fixed-top"
        id="mainNav"
      >
        <div className="container">
          <a className="navbar-brand" href="/">
            {/* <img
              className="masthead-logo me-3"
              src={Logo} // Replace `Logo` with your image path or import
              alt="Logo"
              style={{ width: "50px", height: "50px" }} // Adjust size as needed
            /> */}
            Aleyka Ayurveda
          </a>
          <button
            class="navbar-toggler text-uppercase font-weight-bold bg-primary text-white rounded"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="true"
            aria-label="Toggle navigation"
          >
            <i class="fa fa-bars"></i>
            <span class="d-none d-sm-inline">Menu</span>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ms-auto">
              {/* <li className="nav-item mx-0 mx-lg-1">
                <a className="nav-link py-3 px-0 px-lg-3 rounded" href="#about">
                  About
                </a>
              </li> */}
              <li className="nav-item mx-0 mx-lg-1">
                <a
                  className="nav-link py-3 px-0 px-lg-3 rounded"
                  href="/unsere_massagen"
                >
                  Unsere Massagen
                </a>
              </li>

              {/* <li className="nav-item mx-0 mx-lg-1">
                <a
                  className="nav-link py-3 px-0 px-lg-3 rounded"
                  href="#contact"
                >
                  Book Now
                </a>
              </li> */}
              <li className="nav-item mx-0 mx-lg-1">
                <a
                  className="nav-link py-3 px-0 px-lg-3 rounded"
                  href="/ayurveda_beratung"
                >
                  Ayurveda Beratung
                </a>
              </li>
              <li className="nav-item mx-0 mx-lg-1">
                <a
                  className="nav-link py-3 px-0 px-lg-3 rounded"
                  href="/massage_buchen"
                >
                  Massage Buchen
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Navigation;
