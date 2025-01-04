import { lazy, useState } from "react";
import FAQContent from "../../content/FAQContent.json";
import faqImage from "../../img/image_fx_ (24).jpg";
import styled from "styled-components";

const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));
const ContentBlock = lazy(() => import("../../components/ContentBlock"));

const StyledTitle = styled.h6`
  .highlight {
    color: #FF8B00;
  }
`;

const FAQHeaderSection = styled.div`
  pointer-events: auto;
  position: relative;
  #faq-header {
    margin-top: -8rem;
    background: white;
    pointer-events: auto;
    position: relative;
    z-index: 1;
    
    .ant-row {
      display: flex;
      flex-direction: row-reverse;
      align-items: center;
    }
    
    .ant-col:first-child {
      flex: 0 0 66.66% !important;
      max-width: 66.66% !important;
    }

    .ant-col:last-child {
      flex: 0 0 33.33% !important;
      max-width: 33.33% !important;
      padding-right: 2rem;
      margin-top: 4rem;
    }
    
    h6 {
      font-size: 2.5rem;
      
      // Add this specific styling for the last word
      &::after {
        content: "Questions";
        color: #FF8B00;
        margin-left: 0.5rem;
      }
      
      @media screen and (max-width: 768px) {
        font-size: 2rem;
      }
    }
    p {
      font-size: 1.125rem;
    }

    @media screen and (max-width: 768px) {
      .ant-row {
        flex-direction: column;
      }
      .ant-col:first-child,
      .ant-col:last-child {
        flex: 0 0 100% !important;
        max-width: 100% !important;
        padding-right: 0;
        margin-top: 0;
      }
    }
  }
`;

const QuestionSection = styled.div`
  padding: 2rem 1rem 6rem;
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
  
  h2 {
    color: #2a348c;
    font-size: 2rem;
    margin-bottom: 2rem;
    text-align: center;

    &::after {
      content: "Questions";
      color: #FF8B00;
      margin-left: 0.5rem;
    }
  }
  
  @media screen and (max-width: 768px) {
    padding: 2rem 1rem;
  }
`;

const QuestionBlock = styled.div`
  margin-bottom: 2rem;
  background: white;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2);
  }

  &:last-child {
    margin-bottom: 0;
  }

  @media screen and (max-width: 768px) {
    padding: 1.5rem;
  }
`;

const Question = styled.div`
  color: #2a348c;
  font-size: 1.25rem;
  margin-bottom: 1rem;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  user-select: none;
  transition: color 0.3s ease;

  &:hover {
    color: #FF8B00;
  }

  &.open {
    color: #FF8B00;
  }

  &:after {
    content: '+';
    font-size: 1.5rem;
    transition: all 0.3s ease;
    color: currentColor;
  }

  &.open:after {
    transform: rotate(45deg);
  }
`;

const Answer = styled.div`
  color: #666;
  font-size: 1rem;
  line-height: 1.6;
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease-out;
  
  &.open {
    max-height: 500px;
    transition: max-height 0.5s ease-in;
  }

  p {
    margin: 1rem 0 0 0;
  }
`;

interface FAQQuestion {
  question: string;
  answer: string;
}

interface FAQContent {
  title: string;
  text: string;
  questions: FAQQuestion[];
}

// And update the FAQ component to remove the margin from the wrapper div
const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div style={{ marginBottom: "8rem" }}>
      <Container>
        <ScrollToTop />
        <FAQHeaderSection>
          <ContentBlock
            direction="right"
            title="Frequently Asked"
            content={FAQContent.text}
            icon={faqImage}
            id="faq-header"
          />
        </FAQHeaderSection>
        <QuestionSection>
          <h2 style={{ 
            color: '#2a348c', 
            fontSize: '2rem', 
            marginBottom: '2rem',
            textAlign: 'center' 
          }}>
            Common
          </h2>
          {FAQContent.questions.map((q: FAQQuestion, index: number) => (
            <QuestionBlock 
              key={index}
              onClick={() => toggleQuestion(index)}
            >
              <Question 
                className={openIndex === index ? 'open' : ''}
              >
                {q.question}
              </Question>
              <Answer
                className={openIndex === index ? 'open' : ''}
                dangerouslySetInnerHTML={{ __html: q.answer }}
                onClick={(e) => e.stopPropagation()} 
              ></Answer>
            </QuestionBlock>
          ))}
        </QuestionSection>
      </Container>
    </div>
  );
};
export default FAQ;