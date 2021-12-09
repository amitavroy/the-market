import axios from "axios";
import { NextPage } from "next";
import Image from "next/image";
import Product from "../../interfaces/product.interface";

interface Props {
  product: Product;
}

const ProductDetail: NextPage<Props> = ({ product }) => {
  return (
    <div>
      <h1>{product.title}</h1>
      <p>{product.description}</p>
      <Image src={product.photo_id} width="400" height="200" />
    </div>
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
