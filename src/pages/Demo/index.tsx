import { lazy } from "react";
import DemoContent from "../../content/DemoContent.json";
import MiddleBlockContent from "../../content/MiddleBlockContent.json";
import AboutContent from "../../content/AboutContent.json";
import ProductContent from "../../content/ProductContent.json";
import ContactContent from "../../content/ContactContent.json";
import CenterContentBlock from "../../components/CenterContentBlock";
import { Button } from "../../common/Button";

// Import images following the same pattern as Home
import demoMainImage from "../../img/ima23ge_fx_ (1).jpg";
import demoAboutImage from "../../img/ima23ge_fx_ (1).jpg";
import demoFeature1 from "../../img/ima23ge_fx_ (1).jpg";
import demoFeature2 from "../../img/ima23ge_fx_ (1).jpg";
import demoFeature3 from "../../img/ima23ge_fx_ (1).jpg";
import demoContactImage from "../../img/ima23ge_fx_ (1).jpg";

// Lazy load components just like in Home
const Contact = lazy(() => import("../../components/ContactForm"));
const MiddleBlock = lazy(() => import("../../components/MiddleBlock"));
const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));
const ContentBlock = lazy(() => import("../../components/ContentBlock"));

const Demo = () => {
  return (
    <Container>
      <ScrollToTop />
      <ContentBlock
        direction="right"
        title={DemoContent.title}
        content={DemoContent.text}
        button={[DemoContent.button]}
        icon={demoMainImage}
        id="demo-intro"
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
        icon={demoAboutImage}
        id="demo-about"
      />
      <CenterContentBlock
        direction="left"
        title={DemoContent.features.title}
        content={DemoContent.features.text}
        icon="feature-icon.svg"
        section={DemoContent.features.section.map((_: any, index: number) => ({
          title: `Feature ${index + 1}`,
          content: `Description of feature ${index + 1}`,
          icon: [demoFeature1, demoFeature2, demoFeature3][index]
        }))}
        id="demo-features"
      />
      <ContentBlock
        direction="left"
        title={ProductContent.title}
        content={ProductContent.text}
        icon={demoMainImage}
        id="demo-product"
      />
      <Contact
        title={ContactContent.title}
        content={ContactContent.text}
        icon={demoContactImage}
        id="demo-contact"
      />
    </Container>
  );
};

export default Demo;