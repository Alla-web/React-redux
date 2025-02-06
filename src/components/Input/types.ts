import { ChangeEvent } from "react";

export interface InputProps {
  id?: string;
  name: string;
  type?: "text" | "email" | "password" | "telefon" | "url" | "number" | "checkbox";
  placeholder?: string;
  label?: string;
  value?: string;
  checked?: boolean;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  errorMessage?: string 
}
