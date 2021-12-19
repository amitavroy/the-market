import "../styles/globals.css";

import { useEffect } from "react";

import TrackingEvents from "../enums/tracking-events.enum";
import { MixpanelTracking } from "../servcies/mixpanel";

import type { AppProps } from "next/app";
import TagManager from "react-gtm-module";
function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    const tagManagerArgs = {
      gtmId: "GTM-PPPGZ68",
    };
    TagManager.initialize(tagManagerArgs);
    TagManager.dataLayer({
      dataLayer: {
        event: "my_view",
        userId: "rhkg3",
      },
    });
    MixpanelTracking.getInstance().track(TrackingEvents.PAGE_VIEW);
  }, []);
  return <Component {...pageProps} />;
}

export default MyApp;
