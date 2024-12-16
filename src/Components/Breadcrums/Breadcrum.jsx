import React from 'react';
import { Link } from 'react-router-dom';
import './Breadcrum.css';
import arrow_icon from '../Photos/breadcrum_arrow.png'; 

const Breadcrum = ({ product }) => {
  return (
    <div className="breadcrum">
      <Link to="/">HOME</Link> 
      <img src={arrow_icon} alt="" /> 
      <Link to="/shop">SHOP</Link> 
      <img src={arrow_icon} alt="" /> 
      <Link to={`/shop/${product.category}`}>{product.category}</Link>
      <img src={arrow_icon} alt="" /> 
      {product.name}
    </div>
  );
};

export default Breadcrum;
