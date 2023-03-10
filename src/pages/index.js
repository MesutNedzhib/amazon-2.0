import Head from "next/head";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Amazon 2.0</title>
      </Head>

      <Header />

      <Footer />
    </div>
  );
}
