import { Row, Col } from "antd";
import { withTranslation, TFunction } from "react-i18next";
import { SvgIcon } from "../../common/SvgIcon";
import Container from "../../common/Container";
import i18n from "i18next";
import {
  FooterSection,
  Title,
  NavLink,
  Extra,
  LogoContainer,
  Para,
  Large,
  Chat,
  FooterContainer,
  Language,
} from "./styles";

interface SocialLinkProps {
  href: string;
  src: string;
}

const Footer = ({ t }: { t: TFunction }) => {
  const handleChange = (language: string) => {
    i18n.changeLanguage(language);
  };

  const SocialLink = ({ href, src }: SocialLinkProps) => {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        key={src}
        aria-label={src}
      >
        <SvgIcon src={src} width="25px" height="25px" />
      </a>
    );
  };

  return (
    <>
      <FooterSection>
        <Container>
          <Row justify="space-between" gutter={[30, 20]}>
            <Col lg={10} md={10} sm={12} xs={24}>
              <Language>{t("Contact")}</Language>
              <Large to="/">{t("Tell us everything")}</Large>
              <Para>
                {t(`Do you have any question? Feel free to reach out.`)}
              </Para>
              <a href="mailto:AiAutomation221@gmail.com">
                <Chat>{t(`Let's Chat`)}</Chat>
              </a>
            </Col>
            <Col lg={8} md={8} sm={12} xs={24}>
              <Title>{t("Policy")}</Title>
              <Large to="/">{t("Application Security")}</Large>
              <Large to="/">{t("Software Principles")}</Large>
            </Col>
            <Col lg={6} md={6} sm={12} xs={24}>
              <Title>{t("Company")}</Title>
              <Large to="/">{t("About")}</Large>
              <Large to="/">{t("Blog")}</Large>
            </Col>
          </Row>
        </Container>
      </FooterSection>
      <Extra>
        <Container border={true}>
          <Row
            justify="space-between"
            align="middle"
            style={{ padding: "1rem 0" }}
          >
            <Col>
              <NavLink to="/">
                <LogoContainer>
                  <SvgIcon
                    src="logo.svg"
                    aria-label="homepage"
                    width="160px"
                    height="64px"
                  />
                </LogoContainer>
              </NavLink>
            </Col>
            <Col>
              <FooterContainer>
                <SocialLink
                  href="https://www.google.com/"
                  src="linkedin.svg"
                />
              </FooterContainer>
            </Col>
          </Row>
        </Container>
      </Extra>
    </>
  );
};

export default withTranslation()(Footer);