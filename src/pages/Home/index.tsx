import { lazy } from "react";
import IntroContent from "../../content/IntroContent.json";
import MiddleBlockContent from "../../content/MiddleBlockContent.json";
import AboutContent from "../../content/AboutContent.json";
import MissionContent from "../../content/MissionContent.json";
import ProductContent from "../../content/ProductContent.json";
import ContactContent from "../../content/ContactContent.json";
import CenterContentBlock from "../../components/CenterContentBlock";
import introImage from "../../img/ima23ge_fx_ (1).jpg";
import introImage2 from "../../img/image_fx_ (10).jpg";
import introImage3 from "../../img/image_fx_ (34).jpg";
import introImage4 from "../../img/image_fx_ (17).jpg";
import introImage5 from "../../img/image_fx_ (18).jpg";
import introImage6 from "../../img/image_fx_ (19).jpg";
import introImage8 from "../../img/image_fx_ (20).jpg";
import introImage9 from "../../img/image_fx_ (21).jpg";
import introImage10 from "../../img/image_fx_ (22).jpg";
import introImage11 from "../../img/image_fx_ (30).jpg";

const Contact = lazy(() => import("../../components/ContactForm"));
const MiddleBlock = lazy(() => import("../../components/MiddleBlock"));
const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));
const ContentBlock = lazy(() => import("../../components/ContentBlock"));

const Home = () => {
  return (
    <Container>
      <ScrollToTop />
      <ContentBlock
        direction="right"
        title={IntroContent.title}
        content={IntroContent.text}
        button={IntroContent.button}
        icon={introImage} 
        id="intro"
      />
      <MiddleBlock
        title={MiddleBlockContent.title}
        content={MiddleBlockContent.text}
        button={MiddleBlockContent.button}
      />
      <ContentBlock
        direction="left"
        title={AboutContent.title}
        content={AboutContent.text}
        section={AboutContent.section}
        icon={introImage2}
        id="about"
      />
      <CenterContentBlock
        direction="left"
        title={MissionContent.title}
        content={MissionContent.text}
        section={MissionContent.section.map((item, index) => ({
          ...item,
          icon: [introImage4, introImage5, introImage6, introImage8, introImage9, introImage10][index]
        }))}
        icon="product-launch.svg"
        id="mission"
        />
      <ContentBlock
        direction="left"
        title={ProductContent.title}
        content={ProductContent.text}
        icon={introImage3}
        id="product"
      />
      <Contact
        title={ContactContent.title}
        content={ContactContent.text}
        icon={introImage11}
        id="contact"
      />
    </Container>
  );
};

export default Home;
