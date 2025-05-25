import Carousel from "react-bootstrap/Carousel";
import "../Css/Home.css";
import iphone from "../Assets/Images/Iphone/Iphone.png";
import mac1 from "../Assets/Images/Macbook/Macbook.png";
import watch from "../Assets/Images/Watch/watch.png";

import H_iphone_1 from "../Assets/Images/Iphone/H-iphone-1.png";
import H_iphone_3 from "../Assets/Images/Iphone/H-iphone-3.png";
import H_iphone_4 from "../Assets/Images/Iphone/H-iphone-4.png";
import H_iphone_2 from "../Assets/Images/Iphone/H-iphone-2.png";
import H_iphone_5 from "../Assets/Images/Iphone/H-iphone-5.png";
import H_iphone_6 from "../Assets/Images/Iphone/H-iphone-6.png";
import H_iphone_7 from "../Assets/Images/Iphone/H-iphone-7.png";
import H_iphone_8 from "../Assets/Images/Iphone/H-iphone-8.png";

import iphone_poster from "../Assets/Images/Iphone/Iphone-Poster.png";

import watch_1 from "../Assets/Images/Watch/H-Watch-1.png";
import watch_4 from "../Assets/Images/Watch/H-Watch-4.png";
import watch_5 from "../Assets/Images/Watch/H-Watch-5.png";
import watch_6 from "../Assets/Images/Watch/H-Watch-6.png";
import watch_7 from "../Assets/Images/Watch/H-Watch-7.png";
import watch_9 from "../Assets/Images/Watch/H-Watch-9.png";
import watch_10 from "../Assets/Images/Watch/H-Watch-10.png";

import watch_poster from "../Assets/Images/Watch/watch-poster.png";




import "/Users/kapilpatel/Coding/Apple E-Commerce (React)/src/Css/Home.css";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <>
      <div>
        <Carousel>
          <Carousel.Item>
            <img
              src={watch}
              width="100%"
              height="650"
              style={{ cursor: "pointer" }}
              onClick={() => navigate(`/macbook`)}
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              src={iphone}
              width="100%"
              height="650"
              style={{ cursor: "pointer" }}
              onClick={() => navigate(`/iphone`)}
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              src={mac1}
              width="100%"
              height="650"
              style={{ cursor: "pointer" }}
              onClick={() => navigate(`/watch`)}
            />
          </Carousel.Item>
        </Carousel>

        {/* ------------------------------------------- */}

        <div className="iphone-section">
          <h2 className="section-title">Get to New iPhone.</h2>

          <div className="scroll-container">
            <div className="feature-card" onClick={() => navigate("/iphone")}>
              <img
                src={H_iphone_8}
                alt="AI Feature"
                className="feature-image"
              />
            </div>

            {/* Card 2 */}
            <div className="feature-card" onClick={() => navigate("/iphone")}>
              <div className="text-section"></div>
              <img
                src={H_iphone_7}
                alt="Camera Feature"
                className="feature-image"
              />
            </div>

            {/* Card 3 */}
            <div className="feature-card" onClick={() => navigate("/iphone")}>
              <div className="text-section"></div>
              <img
                src={H_iphone_6}
                alt="Chip Feature"
                className="feature-image"
              />
            </div>

            {/* Card 4 */}
            <div className="feature-card" onClick={() => navigate("/iphone")}>
              <div className="text-section"></div>
              <img
                src={H_iphone_4}
                alt="Design Feature"
                className="feature-image"
              />
            </div>

            <div className="feature-card" onClick={() => navigate("/iphone")}>
              <img
                src={H_iphone_5}
                alt="Design Feature"
                className="feature-image"
              />
            </div>

            <div className="feature-card" onClick={() => navigate("/iphone")}>
              <img
                src={H_iphone_3}
                alt="Design Feature"
                className="feature-image"
              />
            </div>

            <div className="feature-card" onClick={() => navigate("/iphone")}>
              <img
                src={H_iphone_2}
                alt="Design Feature"
                className="feature-image"
              />
            </div>

            <div className="feature-card" onClick={() => navigate("/iphone")}>
              <img
                src={H_iphone_1}
                alt="Design Feature"
                className="feature-image"
              />
            </div>
          </div>
        </div>
      </div>

      <img
        src={iphone_poster}
        width="100%"
        style={{ cursor: "pointer" }}
        onClick={() => navigate(`/iphone`)}
      />

      {/* ------------------------------------------- */}

     <div className="iphone-section">
  <h2 className="section-title">Get to New Apple Watch.</h2>

  <div className="scroll-container">
    <div className="feature-card" onClick={() => navigate("/watch")}>
      <img src={watch_1} alt="AI Feature" className="feature-image" />
    </div>

    <div className="feature-card" onClick={() => navigate("/watch")}>
      <img src={watch_4} alt="AI Feature" className="feature-image" />
    </div>
    <div className="feature-card" onClick={() => navigate("/watch")}>
      <img src={watch_5} alt="AI Feature" className="feature-image" />
    </div>
    <div className="feature-card" onClick={() => navigate("/watch")}>
      <img src={watch_6} alt="AI Feature" className="feature-image" />
    </div>
    <div className="feature-card" onClick={() => navigate("/watch")}>
      <img src={watch_7} alt="AI Feature" className="feature-image" />
    </div>
    <div className="feature-card" onClick={() => navigate("/watch")}>
      <img src={watch_9} alt="AI Feature" className="feature-image" />
    </div>
    <div className="feature-card" onClick={() => navigate("/watch")}>
      <img src={watch_10} alt="AI Feature" className="feature-image" />
    </div>
  </div>
</div>


<img
        src={watch_poster}
        width="100%"
        style={{ cursor: "pointer" }}
        onClick={() => navigate(`/watch`)}
      />
    </>
  );
}



