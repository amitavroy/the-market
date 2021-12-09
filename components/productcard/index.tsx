import React from "react";
import Image from "next/image";
import Product from "../../interfaces/product.interface";

interface Props {
  product: Product;
}

const ProductCard: React.FC<Props> = ({ product }) => {
  return (
    <div>
      <h1>{product.title}</h1>
      <p>{product.description}</p>
      <Image src={product.photo_id} width="400" height="200" />
    </div>
  );
};

export default ProductCard;
