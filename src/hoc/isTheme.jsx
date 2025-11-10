import React, { useState } from "react";

export const withTheme = (Component) => {
  return function Wrapper(props) {
    const [count, setcount] = useState(0);

    const increment = () => {
      setcount((data) => data + 1);
    };

    const theme = "dark";
    return (
      <Component dark={theme} count={count} increment={increment} {...props} />
    );
  };
};
