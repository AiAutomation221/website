import { Row, Col } from "antd";
import { Fade } from "react-awesome-reveal";
import { withTranslation } from "react-i18next";

import { ContentBlockProps } from "./types";
import { Button } from "../../common/Button";
import { SvgIcon } from "../../common/SvgIcon";
import {
  ContentSection,
  Content,
  ContentWrapper,
  ServiceWrapper,
  MinTitle,
  MinPara,
  StyledRow,
  ButtonWrapper,
} from "./styles";

const CenterContentBlock = ({
  title,
  content,
  section,
  t,
  id,
}: ContentBlockProps) => {
  const isJpgOrPng = (src: string): boolean => {
    return src?.toLowerCase().match(/\.(jpg|jpeg|png)$/) !== null;
  };

  return (
    <ContentSection
      id={id}
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        textAlign: "center",
        padding: "2rem 1rem",
        width: "100%",
      }}
    >
      <Fade triggerOnce>
        <ContentWrapper style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          width: "100%",
          padding: "1rem",
          maxWidth: "1200px",
        }}>
          <h6
            style={{
              fontWeight: "700",
              textAlign: "center",
              margin: "0 auto",
              width: "100%",
              maxWidth: "1200px",
              lineHeight: "1.2",
              wordBreak: "break-word",
              whiteSpace: "normal",
              padding: "0 1rem",
            }}
          >
            {t(title)}
          </h6>
          <Content
            style={{
              fontSize: "1.2rem",
              lineHeight: "1.8",
              marginBottom: "3rem",
              width: "100%",
              maxWidth: "1000px",
              padding: "0 1rem",
            }}
          >
            {t(content)}
          </Content>
        </ContentWrapper>

        <ServiceWrapper>
  <Row justify="center" gutter={[32, 16]}>
    {typeof section === "object" &&
      section.map(
        (
          item: {
            title: string;
            content: string;
            icon: string;
          },
          id: number
        ) => (
          <Col
            key={id}
            lg={8}
            md={12}
            sm={24}
            style={{ textAlign: "center" }}
          >
            {/* Replace the existing SvgIcon with this */}
            {isJpgOrPng(item.icon) ? (
              <img 
                src={item.icon} 
                alt={item.title} 
                style={{ 
                  width: '120px',
                  height: '120px',
                  objectFit: 'contain',
                  marginBottom: '20px',
                  backgroundColor: 'transparent' // Ensure transparent background,
                }} 
              />
            ) : (
              <SvgIcon
                src={item.icon}
                width="120px"
                height="120px"
              />
            )}
            <MinTitle>{t(item.title)}</MinTitle>
            <MinPara>{t(item.content)}</MinPara>
          </Col>
        )
      )}
  </Row>
</ServiceWrapper>
      </Fade>
    </ContentSection>
  );
};

export default withTranslation()(CenterContentBlock);