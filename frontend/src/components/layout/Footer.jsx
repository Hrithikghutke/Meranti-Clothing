import React from "react";
import "../../scss/_footer.scss";
import { Link } from "react-router-dom";
//---------Bootstrap--------------
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
//---------Images Desktop --------------
import visa_d from "../../assets/Images/Payments/Desktop/Visa.png";
import strip_d from "../../assets/Images/Payments/Desktop/Stripe.png";
import masterCard_d from "../../assets/Images/Payments/Desktop/Mastercard.png";
import googlePay_d from "../../assets/Images/Payments/Desktop/GooglePay.png";
import applePay_d from "../../assets/Images/Payments/Desktop/ApplePay.png";
import amazonPay_d from "../../assets/Images/Payments/Desktop/AmazonPay.png";
import logo_black from "../../assets/Logo/Logo Black.svg";
import { BsFacebook, BsInstagram, BsTwitter, BsWhatsapp } from "react-icons/bs";

import { SiGmail } from "react-icons/si";

function Footer() {
  return (
    <>
      <Container fluid className="desktop-footer">
        <Container fluid className="payment-container">
          <img src={visa_d} alt="img" />
          <img src={strip_d} alt="img" />
          <img src={masterCard_d} alt="img" />
          <img src={googlePay_d} alt="img" />
          <img src={applePay_d} alt="img" />
          <img src={amazonPay_d} alt="img" />
        </Container>
        <Container fluid className="main-footer">
          <Row className="main-footer-row">
            <Col md="4" className="main-footer-left-part">
              <ul>
                <li>
                  <Link>All Products</Link>
                </li>
                <li>
                  <Link>Your Account</Link>
                </li>
                <li>
                  <Link>Privacy And Cookiee Policy</Link>
                </li>
                <li>
                  <Link>Your Account</Link>
                </li>
                <li>
                  <Link>All Products</Link>
                </li>
              </ul>
            </Col>
            <Col md="4" className="main-footer-centre-part">
              <div className="footer-logo-container">
                <img src={logo_black} alt="img" />
              </div>
              <div className="footer-logo-text-container">
                <h3>Meranti Clothing</h3>
                <p>
                  Embrace the Perfect Blend of Timeless Fashion and Contemporary
                  Flair, Elevating Your Wardrobe to New Heights. Indulge in
                  Luxurious Fabrics, Impeccable Craftsmanship, and Unparalleled
                  Sophistication.
                </p>
              </div>
            </Col>
            <Col md="4" className="main-footer-right-part">
              <ul>
                <li>
                  <Link>All Products</Link>
                </li>
                <li>
                  <Link>Your Account</Link>
                </li>
                <li>
                  <Link>Privacy And Cookiee Policy</Link>
                </li>
                <li>
                  <Link>Your Account</Link>
                </li>
                <li>
                  <Link>All Products</Link>
                </li>
              </ul>
            </Col>
            <Container className="footer-socials-container">
              <Link>
                <BsFacebook />
              </Link>
              <Link>
                <BsInstagram />
              </Link>
              <Link>
                <BsTwitter />
              </Link>
              <Link>
                <SiGmail />
              </Link>
              <Link>
                <BsWhatsapp />
              </Link>
            </Container>
          </Row>
        </Container>
        <Container fluid className="footer-copyright-container">
          <p>Copyright © meranticlothing.com All Rights Reserved</p>
        </Container>
      </Container>

      {/* ------------------------ Mobile Footer -------------------------- */}

      <Container fluid className="mobile-footer">
        <Container fluid className="m-payment-container">
          <img src={visa_d} alt="img" />
          <img src={strip_d} alt="img" />
          <img src={masterCard_d} alt="img" />
          <img src={googlePay_d} alt="img" />
          <img src={applePay_d} alt="img" />
          <img src={amazonPay_d} alt="img" />
        </Container>
        <Container fluid className="m-main-footer-centre-part">
          <div className="m-footer-logo-container">
            <img src={logo_black} alt="img" />
          </div>
          <div className="m-footer-logo-text-container">
            <h3>Meranti Clothing</h3>
            <p>
              Embrace the Perfect Blend of Timeless Fashion and Contemporary
              Flair, Elevating Your Wardrobe to New Heights. Indulge in
              Luxurious Fabrics, Impeccable Craftsmanship, and Unparalleled
              Sophistication.
            </p>
          </div>
        </Container>
        <Container fluid className="m-main-footer">
          <Row className="m-main-footer-row">
            <Col md="6" xs="6" className="m-main-footer-left-part">
              <ul>
                <li>
                  <Link>All Products</Link>
                </li>
                <li>
                  <Link>Your Account</Link>
                </li>
                <li>
                  <Link>Privacy And Cookiee Policy</Link>
                </li>
                <li>
                  <Link>Your Account</Link>
                </li>
                <li>
                  <Link>All Products</Link>
                </li>
              </ul>
            </Col>

            <Col md="6" xs="6" className="m-main-footer-right-part">
              <ul>
                <li>
                  <Link>All Products</Link>
                </li>
                <li>
                  <Link>Your Account</Link>
                </li>
                <li>
                  <Link>Privacy And Cookiee Policy</Link>
                </li>
                <li>
                  <Link>Your Account</Link>
                </li>
                <li>
                  <Link>All Products</Link>
                </li>
              </ul>
            </Col>
            <Container className="m-footer-socials-container">
              <Link>
                <BsFacebook />
              </Link>
              <Link>
                <BsInstagram />
              </Link>
              <Link>
                <BsTwitter />
              </Link>
              <Link>
                <SiGmail />
              </Link>
              <Link>
                <BsWhatsapp />
              </Link>
            </Container>
          </Row>
        </Container>
        <Container fluid className="m-footer-copyright-container">
          <p>Copyright © meranticlothing.com All Rights Reserved</p>
        </Container>
      </Container>
    </>
  );
}

export default Footer;
