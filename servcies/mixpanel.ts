import mixpanel from "mixpanel-browser";
import Product from "../interfaces/product.interface";
import TrackingEvents from "./../enums/tracking-events.enum";

export class MixpanelTracking {
  private static _instance: MixpanelTracking;

  public static getInstance(): MixpanelTracking {
    if (MixpanelTracking._instance == null) {
      return (MixpanelTracking._instance = new MixpanelTracking());
    }
    return this._instance;
  }

  public constructor() {
    if (MixpanelTracking._instance) {
      throw new Error(
        "Error: Instantiation failed: Use MixpanelTracking.getInstance() instead of new."
      );
    }
    mixpanel.init(process.env.NEXT_PUBLIC_MIXPANEL_ID || "", {
      debug: true,
      ignore_dnt: true,
    });
  }

  public track(name: string, data: object = {}) {
    console.log("Event::track");
    mixpanel.track(name, data);
  }

  public pageViewed(data: unknown) {
    mixpanel.track(TrackingEvents.PAGE_VIEW, { data });
  }

  public productViewed(product: Product) {
    console.log("Event::productViewed");
    mixpanel.track(TrackingEvents.PRODUCT_VIEW, this.getProdcutData(product));
  }

  public addedToCart(product: Product) {
    console.log("Event::addedToCart");
    mixpanel.track(
      TrackingEvents.PRODUCT_TO_CART,
      this.getProdcutData(product)
    );
  }

  private getProdcutData(product: Product) {
    return {
      productId: product.id,
      productName: product.title,
      productPrice: product.price,
    };
  }
}
