import { React, useState, useEffect } from "react";
import "../App.css";
import { useNavigate } from 'react-router-dom';
const ProductCard = ({ item }) => {
  const [imgChange, setImgChange] = useState(true);
  const navigate = useNavigate()
  const showDetail =()=>{
    navigate(`/product/${item?.id}`)
  }
  const evented = () => {
    setImgChange(!imgChange);
  };

  return (
    <div className="productCard" onClick={showDetail}>
      <div onMouseEnter={() => evented()} onMouseLeave={() => evented()}>
        <img
          src={imgChange === true ? item?.img : item?.hoverImg}
          width={264}
          alt={item?.title}
        />
      </div>

      <div className="productcard-choice">
        {(item?.choice === true && "Consious Choice") ||
          (item?.premiunSelection === true && "Premiun Selection")}
      </div>
      <div className="productcard-title">{item?.title}</div>
      <div className="productcard-price">₩{item?.price}</div>
      <div className="productcard-new">{item?.new === true && "신제품"}</div>
    </div>
  );
};

export default ProductCard;
