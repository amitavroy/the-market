import React from "react";
import Image from "next/image";
import Product from "../../interfaces/product.interface";
import { ProductTitle } from "../elements/product-title";

interface Props {
  product: Product;
}

const ProductCard: React.FC<Props> = ({ product }) => {
  return (
    <div>
      <div className="w-full">
        <Image
          src={product.photo_id}
          width="400"
          height="200"
          className="w-full"
        />
      </div>
      <ProductTitle title={product.title} />
      <p>{product.description}</p>
    </div>
  );
};

export default ProductCard;
