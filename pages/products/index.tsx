import axios from "axios";
import { NextPage } from "next";
import Link from "next/link";
import React, { useEffect } from "react";

import { Layout } from "../../components/layout";
import ProductCard from "../../components/productcard";
import TrackingEvents from "../../enums/tracking-events.enum";
import Product from "../../interfaces/product.interface";
import ProductsPaginated from "../../interfaces/products-paginated.interface";
import { MixpanelTracking } from "../../servcies/mixpanel";

interface Props {
  products: ProductsPaginated;
}

const Products: NextPage<Props> = ({ products }) => {
  useEffect(() => {
    MixpanelTracking.getInstance().track(TrackingEvents.PAGE_VIEW);
  }, []);
  return (
    <Layout>
      <main className="grid grid-cols-2 gap-16">
        {products.data.length > 0 &&
          products.data.map((product: Product) => {
            return (
              <div key={product.id}>
                <Link href={`/products/${product.slug}`}>
                  <a className="cursor-pointer">
                    <ProductCard product={product} />
                  </a>
                </Link>
              </div>
            );
          })}
      </main>
    </Layout>
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
