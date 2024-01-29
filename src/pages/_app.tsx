import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Poppins } from "next/font/google";
import Layout from "./layout";

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});
export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <main className={poppins.className}>
        <Component {...pageProps} />
      </main>
    </Layout>
  );
}
