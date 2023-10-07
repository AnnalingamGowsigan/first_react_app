import { ReactNode } from "react";

interface Props {
  childern: ReactNode; // using this we can pass html content to Alert-compnent
}

const Alert = ({ childern }: Props) => {
  return <div className="alert alert-primary">childern</div>;
};

export default Alert;
