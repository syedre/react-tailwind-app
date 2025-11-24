import React, { useEffect, useState } from "react";

const GridColor = () => {
  const [arr, setArr] = useState([
    { id: 3, color: false },
    { id: 90, color: false },
    { id: 35, color: false },
    { id: 0, color: false },
    { id: 55, color: false },
    { id: 22, color: false },
  ]);
  const [rev, setRev] = useState([]);
  const styles = {
    container: {
      display: "grid",
      gridTemplateColumns: "repeat(3,1fr)",
      height: "200px",
      width: "300px",
      gap: "4px",
    },
  };

  const handleClick = (id) => {
    const newArr = arr?.map((i) => {
      if (i?.id === id) {
        rev.push(i);
        return { ...i, color: !i?.color };
      }
      return i;
    });
    setArr(newArr);
  };

  const handleSet = () => {
    rev.reverse().forEach((item, index) => {
      setTimeout(() => {
        setArr((prevArr) =>
          prevArr?.map((ele) =>
            ele?.id === item?.id ? { ...ele, color: false } : ele
          )
        );
      }, index * 1000);
    });
  };

  return (
    <div style={styles.container}>
      {arr?.map((i) => (
        <div
          className={i?.color === true ? "bg-green-400" : "bg-red-400"}
          onClick={() => handleClick(i?.id)}
        >
          {i?.id}
        </div>
      ))}
      <button onClick={handleSet}>reset</button>
    </div>
  );
};

export default GridColor;
