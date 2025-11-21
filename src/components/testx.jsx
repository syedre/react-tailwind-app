import { Eye } from "lucide-react";
import React, { useEffect, useState } from "react";

const Example = () => {
  const [show, setShow] = useState(false);
  const handleClick = () => {
    setShow(!show);
  };

  return (
    <>
      <input
        type={show === true ? "text" : "password"}
        className="border border-amber-400"
      />
      <Eye onClick={handleClick} />
    </>
  );
};

export default Example;
