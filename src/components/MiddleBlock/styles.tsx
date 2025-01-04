import styled from "styled-components";

export const MiddleBlockSection = styled("section")`
  position: relative;
  padding: 7.5rem 0 3rem;
  text-align: center;
  display: flex;
  justify-content: center;

  @media screen and (max-width: 1024px) {
    padding: 5.5rem 0 3rem;
  }
`;

export const Content = styled("p")`
  padding: 0.75rem 0 0.75rem;
  max-width: 1000px;  // Added max-width to control line length
  margin: 0 auto;     // Center the content
  line-height: 1.6;   // Added for better readability
`;

export const ContentWrapper = styled("div")`
  max-width: 1200px;  // Increased from 570px
  padding: 0 32px;    // Added horizontal padding
  width: 100%;        // Ensure it takes full width up to max-width

  @media only screen and (max-width: 768px) {
    max-width: 100%;
  }
`;