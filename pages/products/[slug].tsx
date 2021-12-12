import axios from "axios";
import { NextPage } from "next";
import React, { useEffect } from "react";

import { Layout } from "../../components/layout";
import ProductCard from "../../components/productcard";
import Product from "../../interfaces/product.interface";
import { MixpanelTracking } from "../../servcies/mixpanel";

interface Props {
  product: Product;
}

const ProductDetail: NextPage<Props> = ({ product }) => {
  useEffect(() => {
    MixpanelTracking.getInstance().productViewed(product);
  }, []);
  return (
    <Layout>
      <div className="my-6">
        <ProductCard product={product} />
      </div>
      <div>
        <button
          className="p-3 bg-green-700 rounded text-white"
          onClick={() => MixpanelTracking.getInstance().addedToCart(product)}
        >
          Add to Cart
        </button>
      </div>
    </Layout>
  );
};

export default ProductDetail;

export async function getServerSideProps(context: any): Promise<{ props: {} }> {
  const resp = await axios.get(
    `${process.env.API}/products/${context.params.slug}`
  );
  return {
    props: {
      product: resp.data,
    },
  };
}
