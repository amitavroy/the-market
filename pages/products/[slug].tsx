import axios from "axios";
import mixpanel from "mixpanel-browser";
import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

import TrackingEvents from "../../enums/tracking-events.enum";
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
    <div>
      <small>
        <Link href="/products">Back to home</Link>
      </small>
      <h1>{product.title}</h1>
      <p>{product.description}</p>
      <Image src={product.photo_id} width="400" height="200" />
      <button
        onClick={() => MixpanelTracking.getInstance().addedToCart(product)}
      >
        Add to cart
      </button>
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
