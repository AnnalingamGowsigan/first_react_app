import { useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/Ai";
interface Props {
  onClick: () => void;
}

const Like = ({ onClick }: Props) => {
  const [status, setStatus] = useState(false);

  const toggle = () => {
    setStatus(!status);
    onClick();
  };

  if (status)
    return (
      <div>
        {" "}
        <AiFillHeart color="#ff6b81" onClick={toggle} size="20" />{" "}
      </div>
    );

  return (
    <div>
      <AiOutlineHeart onClick={toggle} size="20" />
    </div>
  );
};

export default Like;
