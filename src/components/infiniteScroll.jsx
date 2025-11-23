import React, { useEffect, useRef, useState } from "react";

const InfiniteScroll = () => {
  const [data, setData] = useState([]);
  const [limit, setLimit] = useState(15);
  const [isLoading, setIsLoading] = useState(false);
  const divRef = useRef();

  const styles = {
    boxq: {
      overflowY: "auto",
    },
  };

  async function fetchData() {
    setIsLoading(true);

    const response = await fetch(
      `https://dummyjson.com/users?limit=${limit}&select=firstName,age `
    );
    const result = await response.json();
    const users = result?.users;
    setData([...users]);
    setIsLoading(false);
  }

  const handlescroll = () => {
    const totalScrollHeight = divRef?.current?.scrollHeight;
    const visibleHeight = divRef?.current?.clientHeight;
    const scrollTop = divRef?.current?.scrollTop;
    if (visibleHeight + scrollTop + 1 > totalScrollHeight && !isLoading) {
      setLimit(limit + 15);
    }
  };

  useEffect(() => {
    fetchData();
  }, [limit]);

  return (
    <div
      className="h-[300px] border border-stone-200 "
      style={styles.boxq}
      onScroll={handlescroll}
      ref={divRef}
    >
      <div>Infinite scroll</div>
      <div>{data && data?.map((i) => <div>{i?.firstName}</div>)}</div>
      {isLoading === true && <div>loading....</div>}
    </div>
  );
};

export default InfiniteScroll;
