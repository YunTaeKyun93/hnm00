import { React, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col, Dropdown } from "react-bootstrap";
import classNames from "classnames";
const ProductDetail = () => {
  let { id } = useParams();
  const [product, setProduct] = useState(null);
  const [sizeSelect, setSizeSelect] = useState(false);
  const [sizeChoice, setSizeChoice] = useState(null);
  const getProductDetail = async () => {
    let url = ` https://my-json-server.typicode.com/YunTaeKyun93/hnm00/products/${id}`;
    let res = await fetch(url);
    let data = await res.json();
    setProduct(data);
  };

  // const choicSize = (size) => {
  //   setSizeChoice(size);
  // };
  // useEffect((size) => {
  //   setSizeChoice(size);
  // }, [sizeChoice]);
  useEffect(() => {
    getProductDetail();
  }, []);

  return (
    <div className="productAll-wrapper">
      <Container>
        <Row>
          <Col lg={4} md={12}>
            <img src={product?.img} alt={product?.title} width={"100%"} />
          </Col>

          <Col lg={4} md={12}>
            <img src={product?.hoverImg} alt={product?.title} width={"100%"} />
          </Col>
          <Col lg={4} md={12}>
            <div className="productDetail-title">{product?.title}</div>
            <div className="productDetail-price">₩{product?.price}</div>
            {/* <button
              type="button"
              className="productDetail-size"
              onClick={() => setSizeSelect(!sizeSelect)}
            >
              <span className="productDetail-value">"사이즈 선택"</span>
              <span
                className={`productDetail-arrow ${
                  sizeSelect === false ? "notActive" : "active"
                }`}
              ></span>
              <ul className="productDetail-sizeMenu">
                {product.size.map((a) => {
                  console.log(a);
                  return <li onClick={() => setSizeSelect(a)}>{a}</li>;
                })}
              </ul>
            </button> */}

            <Dropdown>
              <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                Dropdown Button
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Small</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Medium</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Large</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default ProductDetail;
