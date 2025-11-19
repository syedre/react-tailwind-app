import React, { useEffect, useState } from "react";

export const useDebounce = (search, delay) => {
  const [searchData, setSearchData] = useState([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      const ex = ["rehan", "syed", "ahmed"];
      const filTerData = ex?.filter((i) => {
        if (i?.includes(search)) {
          return i;
        }
      });
      setSearchData(filTerData);
    }, delay);

    return () => {
      clearTimeout(timer);
    };
  });

  return [searchData];
};
