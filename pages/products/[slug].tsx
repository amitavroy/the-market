import axios from "axios";
import { NextPage } from "next";

interface Props {
  product: any;
}

const ProductDetail: NextPage<Props> = ({ product }) => {
  return (
    <div>
      <h1>{product.title}</h1>
      <p>{product.description}</p>
      {/* <img src={product.photo_id} /> */}
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
