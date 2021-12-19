import TagManager from "react-gtm-module";
import Product from "../interfaces/product.interface";

export class GTMService {
  private static _instance: GTMService;
  public static getInstance(): GTMService {
    if (GTMService._instance == null) {
      return (GTMService._instance = new GTMService());
    }
    return this._instance;
  }

  public constructor() {
    if (GTMService._instance)
      throw new Error(
        "Error: Instantiation failed: Use GTMService.getInstance() instead of new."
      );

    const tagManagerArgs = {
      gtmId: process.env.NEXT_PUBLIC_GTM_ID || "",
    };
    TagManager.initialize(tagManagerArgs);
  }

  public userLoggedIn(userId: string) {
    TagManager.dataLayer({
      dataLayer: {
        event: "login",
        userId: userId,
      },
    });
  }

  public productViewed(product: Product) {
    TagManager.dataLayer({
      dataLayer: {
        event: "productViewed",
        userId: "rhkg3",
        productId: product.id,
      },
    });
  }

  public productAddedToCart(product: Product, userId: string) {
    TagManager.dataLayer({
      dataLayer: {
        event: "addedToCart",
        userId,
        productId: product.id,
      },
    });
  }
}
