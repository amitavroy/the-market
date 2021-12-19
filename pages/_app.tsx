import "../styles/globals.css";

import { useEffect } from "react";

import { GTMService } from "../servcies/gtm.service";

import type { AppProps } from "next/app";
import { CookiesProvider } from "react-cookie";
function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    GTMService.getInstance();
    // MixpanelTracking.getInstance().track(TrackingEvents.PAGE_VIEW);
  }, []);
  return (
    <CookiesProvider>
      <Component {...pageProps} />
    </CookiesProvider>
  );
}

export default MyApp;
