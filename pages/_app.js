import { useEffect } from "react";
import AOS from "aos";

import '../styles/global.css'
import "aos/dist/aos.css";


export default function App({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
    });
  }, []);

  return <Component {...pageProps} />
}
