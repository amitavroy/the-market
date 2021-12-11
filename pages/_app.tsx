import "../styles/globals.css";

import mixpanel from "mixpanel-browser";
import { useEffect } from "react";

import type { AppProps } from "next/app";
import { MixpanelTracking } from "../servcies/mixpanel";
import TrackingEvents from "../enums/tracking-events.enum";
function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    MixpanelTracking.getInstance().track(TrackingEvents.PAGE_VIEW);
  }, []);
  return <Component {...pageProps} />;
}

export default MyApp;
