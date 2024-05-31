import { Button } from "react-bootstrap";
import img from "../../assets/avatar.png";
import { Link } from "react-router-dom";

export const Landing = () => {
  return (
    <div className="background">
      <Link
        to={"/"}
        style={{
          color: "white",
          alignSelf: "self-start",
          textDecoration: "none",
        }}
      >
        lifecoaching.ai
      </Link>
      <div className="wrapper">
        <img src={img} className="image" alt="Avatar" />
        <div className="content">
          <div className="content_description">
            <h1>Personalized AI Life Coaching for Your Unique Journey</h1>
            <p style={{ marginTop: "16px" }}>
              Choose from three distinct coaches: the tough Coach V, holistic
              Sara, or positive Fansy. Engage in meaningful AI-driven
              conversations, set and achieve your goals, and track daily
              progress. Experience secure, personalized support for your growth.
              Start your journey today!
            </p>
            <Button
              style={{
                background: "white",
                color: "black",
                border: "none",
                borderRadius: "100px",
                width: "250px",
                textAlign: "center",
                fontWeight: "500",
                padding: "8px 24px",
                marginTop: "36px",
              }}
              variant="primary"
            >
              <Link
                to={"/coaches"}
                style={{ textDecoration: "none", color: "black" }}
              >
                Meet Your Coaches
              </Link>
            </Button>
          </div>
        </div>
      </div>
      <div class="footer">
        <div class="footer-copyright">
          2024 Personalized AI Life Coaching. All Rights Reserved.
        </div>
        <div class="footer-links">
          <Link to={"/"} class="footer-links__item">
            Contact Us
          </Link>
          <Link to={"/"} target="_blank" class="footer-links__item">
            Privacy Policy
          </Link>
          <Link to={"/"} target="_blank" class="footer-links__item">
            Terms of Use
          </Link>
        </div>
      </div>
    </div>
  );
};
