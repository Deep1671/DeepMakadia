import React from "react";
import {
  FaEnvelope,
  FaLinkedin,
  FaWhatsapp,
  FaFacebook,
  FaInstagram,
  FaGithub,
} from "react-icons/fa";

const Contact = () => {
  return (
    <>
      <style>{`
        .glow-card {
          position: relative;
          padding: 1.5rem;
          border-radius: 1rem;
          background-color: #212529;
          border: 2px solid #444;
          box-shadow: none;
          overflow: hidden;
          transition: border-color 0.4s ease, box-shadow 0.4s ease;
        }

        .glow-card:hover {
          border-color: #f39c12;
          box-shadow:
            0 0 10px 2px #f39c12,
            0 0 25px 6px rgba(243, 156, 18, 0.6),
            0 0 35px 12px rgba(243, 156, 18, 0.4);
        }

        .glow-card::before {
          content: "";
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: linear-gradient(
            120deg,
            rgba(255, 255, 255, 0) 30%,
            rgba(255, 255, 255, 0.3) 50%,
            rgba(255, 255, 255, 0) 70%
          );
          transform: rotate(25deg) translateX(-100%);
          pointer-events: none;
        }

        .glow-card:hover::before {
          animation: shine 2s linear infinite;
        }

        @keyframes shine {
          0% {
            transform: rotate(25deg) translateX(-100%);
          }
          100% {
            transform: rotate(25deg) translateX(100%);
          }
        }
      `}</style>

      <div className="container py-5 text-white">
        <h2 className="mb-4 text-center">📬 Contact Me</h2>

        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-6">
            <div className="glow-card text-white">
              <ul className="list-unstyled fs-5">
                <li className="mb-3">
                  <FaEnvelope className="me-2 text-info" />
                  Email:{" "}
                  <a
                    href="mailto:deepmakadia20@gmail.com"
                    className="text-info text-decoration-none"
                  >
                    deepmakadia20@gmail.com
                  </a>
                </li>

                <li className="mb-3">
                  <FaLinkedin className="me-2 text-info" />
                  LinkedIn:{" "}
                  <a
                    href="https://www.linkedin.com/in/deep-makadia2012"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-info text-decoration-none"
                  >
                    Deep Makadia
                  </a>
                </li>

                <li className="mb-3">
                  <FaWhatsapp className="me-2 text-success" />
                  WhatsApp:{" "}
                  <a
                    href="https://wa.me/919409297083"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-success text-decoration-none"
                  >
                    +91 94092 97083
                  </a>
                </li>

                <li className="mb-3">
                  <FaFacebook className="me-2 text-primary" />
                  Facebook:{" "}
                  <a
                    href="https://www.facebook.com/profile.php?id=61560461340411"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary text-decoration-none"
                  >
                    Deep Makadia
                  </a>
                </li>

                <li className="mb-3">
                  <FaInstagram className="me-2 text-danger" />
                  Instagram:{" "}
                  <a
                    href="https://www.instagram.com/d_.m_.2012"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-danger text-decoration-none"
                  >
                    d_.m_.2012
                  </a>
                </li>

                <li className="mb-3">
                  <FaGithub className="me-2 text-danger" />
                  Github:{" "}
                  <a
                    href="https://www.github.com/deep1671"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-danger text-decoration-none"
                  >
                    Deep1671
                  </a>
                </li>
                      
              </ul>

              <div className="mt-4 p-4 rounded bg-secondary bg-opacity-10 border-start border-4 border-info">
                <h4 className="text-light mb-2">📍 Address</h4>
                <p className="text-white-50 mb-0">
                  <a
                    href="https://maps.app.goo.gl/xamaAqMj8zTE21LF8"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white text-decoration-underline"
                  >
                    201, Shree Hari Apartment, <br />
                    Air Force-2 Road, Opp. Vachharadada Temple, <br />
                    Satyam Colony, Jamnagar, Gujarat – 361004, <br />
                    India
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
