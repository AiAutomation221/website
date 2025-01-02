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
  return (
    <ContentSection
      id={id}
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh", // Ensure it takes the full viewport height
        textAlign: "center",
        padding: "2rem 1rem", // Add padding for spacing
        width: "100%", // Ensure it takes full width of the page
        maxWidth: "100%", // Remove unnecessary restrictions
        margin: "0 auto", // Ensure the content is centered horizontally
      }}
    >
      <Fade triggerOnce>
        {/* Centered Title and Content */}
        <ContentWrapper  style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center", // Horizontal centering
            justifyContent: "center", // Vertical centering
            textAlign: "center", // Ensure content alignment
            width: "100%", // Use full available width
            maxWidth: "100%", // Remove any constraints
            padding: "2rem 1rem", // Add spacing
        }}>
          <h6
            style={{
              //fontSize: "2rem", // Match the original size
              fontWeight: "700", // Ensure boldness
              textAlign: "center", // Align text centrally
              margin: "0 auto", // Center horizontally
              maxWidth: "1000px", // Set the width constraint for expansion
              lineHeight: "1.2", // Adjust vertical spacing
              wordBreak: "break-word", // Prevent long words from breaking the layout
              whiteSpace: "normal", // Allow natural text wrapping
            }}
          >
            {t(title)}
          </h6>
          <Content
            style={{
              fontSize: "1.2rem",
              maxWidth: "1000px",
              lineHeight: "1.8",
              marginBottom: "3rem", // Space before the section grid
              width: "1000px", // Ensure it takes full width of its container
   
              
            }}
          >
            {t(content)}
          </Content>
        </ContentWrapper>

        {/* Render Sections in Two Rows of Three */}
        <ServiceWrapper>
          <Row justify="center" gutter={[32, 32]}>
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
                    <SvgIcon
                      src={item.icon}
                      width="60px"
                      height="60px"
                    />
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
