import { Carousel } from "react-bootstrap";
import IMG1 from "./assets/img1.jpg";
import IMG2 from "./assets/img2.jpg";
import IMG3 from "./assets/img3.jpg";
import IMG4 from "./assets/img4.jpg";
import IMG5 from "./assets/img5.jpg";
import IMG6 from "./assets/img6.jpg";
// import "./style.css";
const Gallery = () => {
  return (
    <>
      <div className="container mt-5">
        <Carousel>
          <Carousel.Item>
            <img
              className="gallery_img d-block w-100 "
              src={IMG1}
              alt="First slide"
            />
            <Carousel.Caption>
              {/* <h3>First Slide</h3>
              <p>Sample text for the first slide.</p> */}
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="gallery_img d-block w-100"
              src={IMG2}
              alt="Second slide"
            />
            <Carousel.Caption>
              {/* <h3>Second Slide</h3>
              <p>Sample text for the second slide.</p> */}
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="gallery_img d-block w-100"
              src={IMG3}
              alt="Third slide"
            />
            <Carousel.Caption>
              {/* <h3>Third Slide</h3>
              <p>Sample text for the third slide.</p> */}
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="gallery_img d-block w-100"
              src={IMG4}
              alt="Fourth slide"
            />
            <Carousel.Caption>
              {/* <h3>Third Slide</h3>
              <p>Sample text for the third slide.</p> */}
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="gallery_img d-block w-100"
              src={IMG5}
              alt="Fifth slide"
            />
            <Carousel.Caption>
              {/* <h3>Third Slide</h3>
              <p>Sample text for the third slide.</p> */}
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="gallery_img d-block w-100"
              src={IMG6}
              alt="sixth slide"
            />
            <Carousel.Caption>
              {/* <h3>Third Slide</h3>
              <p>Sample text for the third slide.</p> */}
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </>
  );
};
export default Gallery;
