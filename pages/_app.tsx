import "../styles/globals.css";
import Head from "next/head";
import type { AppProps } from "next/app";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Aos from "aos";
import "react-toastify/dist/ReactToastify.css";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    Aos.init({
      offset: 200,
      duration: 600,
      easing: "ease-in-sine",
      delay: 100,
    });
  }, []);
  const queryClient = new QueryClient();
  return (
    <>
      <Head>
        <title>
          Morenikeji Popoolas Portfolio Website - Contact Me, View My CV
        </title>
        <meta
          name="description"
          content="Welcome to Morenikeji Popoola's (Elijah) website, created for a basic introduction of myself and my passion for programming and software development. Through the site you can contact me for work and collaboration projects and you can request my CV."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
        <ReactQueryDevtools position={"bottom-right"} />
      </QueryClientProvider>
    </>
  );
}
