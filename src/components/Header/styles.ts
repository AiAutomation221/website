import styled from "styled-components";
import { Link } from "react-router-dom";
import { MenuOutlined } from "@ant-design/icons";

export const Span = styled("span")`
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover,
  &:active,
  &:focus {
    color: rgb(255, 130, 92);
    text-underline-position: under;
    text-decoration: rgb(255, 130, 92) wavy underline;
  }
`;

export const HeaderSection = styled("header")`
  padding: 1rem 0.5rem;
  background: rgba(255, 255, 255, 0.98);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  z-index: 1000;
  backdrop-filter: blur(5px);
  border-bottom: 1px solid rgba(24, 33, 109, 0.06);

  .ant-row-space-between {
    align-items: center;
    text-align: center;
  }
`;

export const LogoContainer = styled(Link)`
  display: flex;
`;

export const NavLink = styled("div")`
  display: inline-block;
  text-align: center;
`;

export const CustomNavLink = styled("div")`
  width: 203px;
  display: inline-block;

  @media only screen and (max-width: 411px) {
    width: 150px;
  }

  @media only screen and (max-width: 320px) {
    width: 118px;
  }
`;

export const CustomNavLinkSmall = styled(NavLink)`
  font-size: 1.2rem;
  color: #2a348c;
  transition: color 0.2s ease-in;
  margin: 0.5rem 2rem;

  &[aria-current="page"] ${Span} {
    color: rgb(255, 130, 92);
    text-decoration: rgb(255, 130, 92) wavy underline;
    text-underline-position: under;
  }

  @media only screen and (max-width: 768px) {
    margin: 1.25rem 2rem;
  }
`;

export const Burger = styled("div")`
  @media only screen and (max-width: 890px) {
    display: block;
  }

  display: none;

  svg {
    fill: #5466C2;
  }
`;

export const NotHidden = styled("div")`
  @media only screen and (max-width: 890px) {
    display: none;
  }
`;

export const Menu = styled("h5")`
  font-size: 1.5rem;
  font-weight: 600;
  text-align: center;
`;

export const Label = styled("span")`
  font-weight: 500;
  color: #404041;
  text-align: right;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`;

export const Outline = styled(MenuOutlined)`
  font-size: 22px;
`;