export interface ButtonProps {
    name?: string;
    type?: "submit" | "button" | "reset"; 
    disabled?: boolean; 
    onClick?: () => void;
    isRed?: boolean;
  }

   