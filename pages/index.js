import Head from "next/head";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import en from "../locales/en";
import tr from "../locales/tr";
import Navbar from "../components/Navbar";
import HomeSec from "../components/HomeSec";
import AppGallery from "../components/AppGallery";
import Numbers from "../components/Numbers";
import Footer from "../components/Footer";
import CardInfos from "../components/CardInfos";
import AdvanceFeatures from "../components/AdvanceFeatures";
import AboutUs from "../components/AboutUs";
import Contact from "../components/Contact";

export default function Home() {
  const router = useRouter();
  const { locale } = router;
  const text = locale === "tr" ? tr : en;

  return (
    <div>
      <Head>
        <title>Postegrolili</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Navbar navLinks={text.nav} />
      <div className="postegroMain">
        <HomeSec text={text} />
        <CardInfos text={text} />
        <div name="aboutus" id="aboutus">
          <AboutUs text={text} />
        </div>
        <AdvanceFeatures text={text} />
        <Numbers text={text} />
        <div name="gallery" id="gallery">
          <AppGallery text={text} />
        </div>
        <div name="contactus" id="contactus">
          <Contact text={text} />
        </div>
      </div>
      <Footer text={text} />
    </div>
  );
}
