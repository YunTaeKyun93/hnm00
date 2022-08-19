import { React, useEffect, useState } from "react";
import ProductCard from "./../components/ProductCard";
import { Container, Row, Col } from "react-bootstrap";
import "../App.css";
import { MAIN_DATA } from "../data";
import { useSearchParams } from "react-router-dom";
const ProductAll = () => {
  const [productList, setProductList] = useState(null);
  const [query, setQuery] = useSearchParams();
  const getProducts = async () => {
    let searchQuery = query.get("q") || "";
    console.log(searchQuery);
    let url = `https://my-json-server.typicode.com/YunTaeKyun93/hnm00/products?q=${searchQuery}`;
   
    
    
    let res = await fetch(url);
    let data = await res.json();
    setProductList(data);
  };
  useEffect(() => {
    getProducts();
  }, [query]);

  return (
    <div className="productAll-wrapper">
      <Container>
        <Row>
          {productList &&
            productList.map((a, i) => (
              <Col lg={3} md={6} sm={12} key={i}>
                <ProductCard item={a} key={i} />
              </Col>
            ))}

          {/* {MAIN_DATA && MAIN_DATA.map((a, i) => (
            <Col lg={3} md={6} sm={12}>
              <ProductCard item={a} />
            </Col>
          ))} */}
        </Row>
      </Container>
    </div>
  );
};

export default ProductAll;
