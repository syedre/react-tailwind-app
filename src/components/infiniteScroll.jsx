import React, { useEffect, useRef, useState } from "react";

const Child = ({ data }) => {
  const [showPhone, setShowPhone] = useState(false);
  return (
    <div>
      <button className={"h-8"} onClick={() => setShowPhone(!showPhone)}>
        {data?.firstName}
      </button>
      {showPhone === true && data?.age}
    </div>
  );
};

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
    setData([...data, ...result.users]);
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
    <div className="h-[300px] border border-stone-300 flex flex-col ">
      <div className="h-15 bg-stone-100 sticky top-0 left-0 flex items-center">
        Infinite scroll
      </div>
      <div
        className="flex-1"
        onScroll={handlescroll}
        ref={divRef}
        style={styles.boxq}
      >
        {data && data?.map((i) => <Child data={i} />)}
      </div>
      {isLoading === true && <div>loading....</div>}
    </div>
  );
};

export default InfiniteScroll;
