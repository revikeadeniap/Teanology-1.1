import { Container, Row, Col } from "react-bootstrap";
import './Fear.css';

import { Link } from "react-router-dom";
import { getProduct } from "./dataFear";

import foto from "../teh.jpg";

const TeaMenuFear = () => {
    let product = getProduct();
    let currentType = "";
  
    return (
        <>
          {product.map((product, index) => {
            if (product.type !== currentType) {
              currentType = product.type;
              return (
                <Container fluid className="menu__box-fear" key={currentType}>
                  <h3 className="type-menu-fear">{product.type}</h3>
                  <h4 className="dash-fear"></h4>
                  <Link to={`/product-details-fear/${product.number}`} key={product.number}>
                    <Row className="list-menu-fear">
                      <Col md={10} xs={8}>
                        <a href="detail-product-fear">
                          <h5 className="code-name-fear">{product.name}</h5>
                          <small className="status">
                            <i className="bi bi-hand-thumbs-up me-2"></i>
                            {product.highlight}
                          </small>
                          <p>{product.ings}</p>
                          <p className="fw-bold">Rp28.000</p>
                        </a>
                      </Col>
    
                      <Col md={2} xs={4} className="mt-3">
                          <div className="position-relative" style={{ height: "88px" }}>
                            <img alt="position-foto" src={foto} width={"88px"} height={"88px"} className="float-end" style={{ borderRadius: "20px" }}></img>
                          </div>
                      </Col>
                    </Row>
                  </Link>
                </Container>
              );
            } else {
              return (
                <Container fluid className="menu__box-fear" style={{ boxShadow: '0 !important', marginTop: '-11px', zIndex: '10' }}>
                  {index !== 0 && <h4 className="dash-fear"></h4>}
                  <Link to={`/product-details-fear/${product.number}`} key={product.number}>
                    <Row className="list-menu-fear" key={product.number}>
                      <Col md={10} xs={8}>
                        <a href="detail-product-fear">
                          <h5 className="code-name-fear">{product.name}</h5>
                          <small className="status">
                            <i className="bi bi-hand-thumbs-up me-2"></i>
                            {product.highlight}
                          </small>
                          <p>{product.ings}</p>
                          <p className="fw-bold">Rp28.000</p>
                        </a>
                      </Col>
    
                      <Col md={2} xs={4} className="mt-3">
                          <div className="position-relative" style={{ height: "88px" }}>
                            <img alt="position-foto" src={foto} width={"88px"} height={"88px"} className="float-end" style={{ borderRadius: "20px" }}></img>
                          </div>
                      </Col>
                    </Row>
                  </Link>
                </Container>
              );
            }
          })}
        </>
      );
}

export default TeaMenuFear;