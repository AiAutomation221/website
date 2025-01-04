import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import { Slide } from "react-awesome-reveal";
import { ContactProps, ValidationTypeProps } from "./types";
import { useForm } from "../../common/utils/useForm";
import validate from "../../common/utils/validationRules";
import { Button } from "../../common/Button";
import { SvgIcon } from "../../common/SvgIcon";
import Block from "../Block";
import Input from "../../common/Input";
import TextArea from "../../common/TextArea";
import { ContactContainer, FormGroup, Span, ButtonContainer } from "./styles";

const Contact = ({ title, content, id, icon, t }: ContactProps) => {
  const { values, errors, handleChange, handleSubmit } = useForm(validate);
  
  const isJpgOrPng = (src: string): boolean => {
    return src?.toLowerCase().match(/\.(jpg|jpeg|png)$/) !== null;
  };

  const ValidationType = ({ type }: ValidationTypeProps) => {
    const ErrorMessage = errors[type as keyof typeof errors];
    return <Span>{ErrorMessage}</Span>;
  };

  return (
    <ContactContainer id={id}>
      <Row justify="space-between" align="middle">
        <Col lg={12} md={11} sm={24} xs={24} style={{ marginTop: "-100px" }}>
          <Slide direction="left" triggerOnce>
            <div>
              <Block title={title} content={content} />
              {icon && (
                <div style={{ marginTop: '2rem' }}>
                  {isJpgOrPng(icon) ? (
                    <img 
                      src={icon} 
                      alt={title} 
                      style={{ 
                        width: '100%',
                        maxWidth: '400px',
                        height: 'auto',
                        objectFit: 'contain'
                      }} 
                    />
                  ) : (
                    <SvgIcon
                      src={icon}
                      width="100%"
                      height="100%"
                    />
                  )}
                </div>
              )}
            </div>
          </Slide>
        </Col>
        <Col lg={12} md={12} sm={24} xs={24}>
          <Slide direction="right" triggerOnce>
            <div>
              <FormGroup autoComplete="off" onSubmit={handleSubmit}>
                <Col span={24}>
                  <Input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={values.name || ""}
                    onChange={handleChange}
                  />
                  <ValidationType type="name" />
                </Col>
                <Col span={24}>
                  <Input
                    type="text"
                    name="email"
                    placeholder="Your Email"
                    value={values.email || ""}
                    onChange={handleChange}
                  />
                  <ValidationType type="email" />
                </Col>
                <Col span={24}>
                  <TextArea
                    placeholder="Your Message"
                    value={values.message || ""}
                    name="message"
                    onChange={handleChange}
                  />
                  <ValidationType type="message" />
                </Col>
                <ButtonContainer>
                  <Button name="submit">{t("Submit")}</Button>
                </ButtonContainer>
              </FormGroup>
            </div>
          </Slide>
        </Col>
      </Row>
    </ContactContainer>
  );
};

export default withTranslation()(Contact);