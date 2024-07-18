import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import '../../../../assets/scss/themes/UserNav/_usernav.scss';

const NavbarTop = () => {
  return (
    <div>
      <Container className="app-container">
        <Row className="app-body">
          <Col xs={3} className="app-body-content-item">
            <Image src="https://www.servicesepc.org/public/themes/frontendTheme/newassets/images/logo.png" alt="India Emblem" fluid />
          </Col>
          <Col xs={3} className="app-body-content-item">
            <Image
              src="https://www.servicesepc.org/public/themes/frontendTheme/newassets/images/commerce-logo.png"
              alt="India Emblem"
              fluid
            />
          </Col>
          <Col xs={3} className="app-body-content-item">
            <Image
              src="https://www.servicesepc.org/public/themes/frontendTheme/newassets/images/is-logo.png"
              alt="India Serves Logo"
              fluid
            />
          </Col>
          <Col xs={3} className="app-body-content-item">
            <Image src="https://www.servicesepc.org/public/themes/frontendTheme/newassets/images/pib.jpg" alt="PIB Logo" fluid />
          </Col>
          <Col xs={3} className="app-body-content-item">
            <Image
              src="https://www.servicesepc.org/public/themes/frontendTheme/newassets/images/is-logo.png"
              alt="India Serves Logo"
              fluid
            />
          </Col>
        </Row>

        <Row>
          <Col xs={2} className="app-body-content-item-second">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-youtube"></i>
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default NavbarTop;
