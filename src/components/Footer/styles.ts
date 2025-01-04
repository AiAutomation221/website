import styled from "styled-components";
import { Link } from "react-router-dom";

export const FooterSection = styled("footer")`
  background: rgb(241, 242, 243);
  padding: 1.5rem 0 1rem 0;
  margin-top: 0;
  position: relative;
`;

export const Title = styled("h4")`
  font-size: 20px;
  text-transform: capitalize;
  color: #2a348c;
  margin-bottom: 0.5rem;

  @media screen and (max-width: 414px) {
    padding: 0.5rem 0;
  }
`;

export const NavLink = styled(Link)`
  display: block;
  font-size: 1rem;
  margin-bottom: 0.375rem;
  transition: all 0.2s ease-in-out;

  &:hover,
  &:active,
  &:focus {
    color: #15418e;
  }
`;

export const Extra = styled("section")`
  background: rgb(241, 242, 243);
  position: relative;
  width: 100%;
  padding: 0.5rem 0;
`;

export const LogoContainer = styled("div")`
  display: flex;
  position: relative;
`;

export const Para = styled("div")`
  color: #2a348c;
  font-size: 14px;
  width: 70%;
  margin: 0.5rem 0;
`;

export const Large = styled(Link)`
  font-size: 16px;
  color: #000;
  cursor: pointer;
  text-transform: capitalize;
  line-height: 20px;
  display: block;
  margin-bottom: 0.375rem;
  transition: all 0.3s ease-in-out;
  max-width: max-content;

  &:hover {
    color: rgb(255, 130, 92);
    text-underline-position: under;
    text-decoration: rgb(255, 130, 92) wavy underline;
  }
`;

export const Chat = styled("p")`
  color: #2a348c;
  max-width: fit-content;
  border-bottom: 1px solid #2a348c;
  cursor: pointer;
  margin-top: 0.5rem;
  transition: all 0.3s ease-in-out;

  &:hover {
    border-bottom: 1px solid rgb(255, 130, 92);
    color: rgb(255, 130, 92);
  }
`;

export const FooterContainer = styled("div")`
  max-width: 510px;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  text-align: center;
  align-items: center;
  transition: all 0.1s ease-in-out;

  a {
    &:hover,
    &:active,
    &:focus {
      -webkit-transform: scale(1.1);
      -ms-transform: scale(1.1);
      transform: scale(1.1);
    }
  }

  @media screen and (max-width: 769px) {
    width: auto;
    justify-content: flex-end;

    a:not(:last-child) {
      display: none;
    }
  }

  div {
    cursor: pointer;
    margin-right: 15px;
    width: 25px;
    height: 25px;

    &:hover {
      fill: rgb(255, 130, 92);
    }
  }
`;

export const Language = styled("h4")`
  font-size: 20px;
  text-transform: capitalize;
  color: #2a348c;
  margin-bottom: 0.5rem;

  @media screen and (max-width: 414px) {
    padding: 0.5rem 0;
  }
`;

export const Label = styled("label")`
  font-size: 20px;
  text-transform: capitalize;
  color: #2a348c;
  display: block;
  margin-bottom: 0.75rem;
  font-family: "Motiva Sans Bold", serif;

  @media screen and (max-width: 414px) {
    padding: 0.5rem 0;
    margin-bottom: 0.375rem;
  }
`;

export const LanguageSwitch = styled("div")`
  cursor: pointer;
  transition: all 0.1s ease-in-out;

  &:hover,
  &:active,
  &:focus {
    -webkit-transform: scale(1.1);
    -ms-transform: scale(1.1);
    transform: scale(1.1);
  }
`;

export const LanguageSwitchContainer = styled("div")`
  display: flex;
  justify-content: space-between;
  width: 85px;
`;