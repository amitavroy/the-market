import axios from "axios";
import mixpanel from "mixpanel-browser";
import { NextPage } from "next";
import Link from "next/link";
import React, { useEffect } from "react";
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
