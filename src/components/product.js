import React from 'react';
import { Link } from 'react-router-dom';
import shoze from './../shoze.json';

function Product() {
  // console.log(shoze)
  // console.log(Object.keys(shoze))

  return (
    <div>
    <h1 className='mrgnBtm'>Welcome to Product</h1>
    <div className="product-Container">
      {Object.keys(shoze).map(
        keyName=>{
          return(
            <Link key={keyName} className='mrgnhorizontal' to={`/product/${keyName}`}>
              <h4>{shoze[keyName].name}</h4>
              <img src={shoze[keyName].img} alt={shoze[keyName].img} height={200}/>
            </Link>
          )})}
    </div>
    </div>
  );
}

export default Product;