import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  color?: "primary" | "secondary" | "danger" | "success";
  onClick: () => void;
}
const Button = ({ children, onClick, color = "primary" }: Props) => {
  return (
    <button
      type="button"
      className={"btn btn-" + color}
      data-bs-dismiss="alert"
      aria-label="Close"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
