import { TFunction } from "react-i18next";
export interface ContactProps {
  title: string;
  content: string;
  id: string;
  icon?: string; // Add this line
  t: any;
}

export interface ValidationTypeProps {
  type: string;
}
