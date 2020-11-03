import React from 'react';
import { useParams } from 'react-router-dom';
import shoze from './../shoze.json';

function ProductItems() {
  const { id } = useParams()
  const shoeId = shoze[id]
  if(!shoeId)
    return <h3>Product Not Found</h3>
  return (
    <div className="singleItem">
      <h4>{shoeId.name}</h4>
      <img src={shoeId.img} alt={shoeId.img} height={400} />
    </div>
  );
}

export default ProductItems;