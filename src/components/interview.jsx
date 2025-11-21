import React, { useEffect, useState } from "react";

const Question = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const res = await fetch("https://fakestoreapi.com/products");
    const response = await res.json();
    const _mapped = response?.map((i) => {
      return { ...i, showPrice: false };
    });
    setData(_mapped);
  };

  const handleClick = (id) => {
    const newData = data?.map((i) => {
      if (i?.id === id) {
        return { ...i, showPrice: !i?.showPrice };
      }
      return i;
    });
    setData(newData);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {data &&
        data?.map((i) => {
          return (
            <div>
              <button onClick={() => handleClick(i?.id)}>
                {i?.title.slice(0, 10)}
              </button>
              {i?.showPrice === true && <div>{i?.price}</div>}
            </div>
          );
        })}
    </div>
  );
};
export default Question;
