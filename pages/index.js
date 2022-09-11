import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";
export default function Home() {
  return (
    <div>
      <Head>
        <title>Shorten-URL</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container">
       <Header/>
       {/* <Main/>
      <Footer/>    */}
      </div>
    </div>
  );
}
