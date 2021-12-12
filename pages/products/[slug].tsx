import axios from "axios";
import { NextPage } from "next";

import { Layout } from "../../components/layout";
import ProductCard from "../../components/productcard";
import Product from "../../interfaces/product.interface";

interface Props {
  product: Product;
}

const ProductDetail: NextPage<Props> = ({ product }) => {
  return (
    <Layout>
      <div className="my-6">
        <ProductCard product={product} />
      </div>
      <div>
        <button className="p-3 bg-green-700 rounded text-white">
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
