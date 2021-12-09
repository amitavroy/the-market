import axios from "axios";
import { NextPage } from "next";
import Link from "next/link";
import React from "react";
import ProductCard from "../../components/productcard";
import Product from "../../interfaces/product.interface";

import ProductsPaginated from "../../interfaces/products-paginated.interface";

interface Props {
  products: ProductsPaginated;
}

const Products: NextPage<Props> = ({ products }) => {
  return (
    <div>
      <main>
        {products.data.length > 0 && (
          <div>
            <ul>
              {products.data.map((product: Product) => {
                return (
                  <div key={product.id}>
                    <li>
                      <Link href={`/products/${product.slug}`}>
                        <div style={{ width: "25%", cursor: "pointer" }}>
                          <ProductCard product={product} />
                        </div>
                      </Link>
                    </li>
                  </div>
                );
              })}
            </ul>
          </div>
        )}
      </main>
    </div>
  );
};
export default Products;

export async function getServerSideProps(context: any): Promise<{ props: {} }> {
  const resp = await axios.get(`${process.env.API}/products`);
  return {
    props: {
      products: resp.data,
    },
  };
}
