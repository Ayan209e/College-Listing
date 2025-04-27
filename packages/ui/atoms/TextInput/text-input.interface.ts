import { ClassNameValue } from "tailwind-merge";

export interface ITextInputProps {
  className?: ClassNameValue;
  defaultValue?: string;
  disabled?: boolean;
  error?: string;
  id?: string;
  label?: string;
  onChange?: (value: string) => void;
  variant?: "light" | "dark";
  placeholder?: string;
  icon?: React.ReactNode | Element;
}
