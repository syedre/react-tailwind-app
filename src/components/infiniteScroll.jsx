import React, { useEffect, useRef, useState } from "react";

const InfiniteScroll = () => {
  const [data, setData] = useState([]);
  const [skip, setSkip] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const divRef = useRef();
  let limit = 10;

  const styles = {
    boxq: {
      overflowY: "auto",
    },
  };

  async function fetchData() {
    setIsLoading(true);

    const response = await fetch(
      `https://dummyjson.com/users?limit=${limit}&skip=${skip}&select=firstName,age `
    );
    const result = await response.json();
    setData((prev) => [...prev, ...result.users]);
    setIsLoading(false);
  }

  const handlescroll = () => {
    const totalScrollHeight = divRef?.current?.scrollHeight;
    const visibleHeight = divRef?.current?.clientHeight;
    const scrollTop = divRef?.current?.scrollTop;
    if (visibleHeight + scrollTop + 1 > totalScrollHeight && !isLoading) {
      setSkip((prev) => prev + limit);
    }
  };

  useEffect(() => {
    fetchData();
  }, [skip]);

  return (
    <div
      className="h-[300px] border border-stone-200 "
      style={styles.boxq}
      onScroll={handlescroll}
      ref={divRef}
    >
      <div>Infinite scroll</div>
      <div>
        {data && data?.map((i) => <div className={"h-8"}>{i?.firstName}</div>)}
      </div>
      {isLoading === true && <div>loading....</div>}
    </div>
  );
};

export default InfiniteScroll;
