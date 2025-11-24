import React, { useEffect, useState } from "react";

const _users = [
  { id: 1, name: "John" },
  { id: 2, name: "Emma" },
  { id: 3, name: "Michael" },
  { id: 4, name: "Sophia" },
  { id: 5, name: "David" },
  { id: 6, name: "Olivia" },
  { id: 7, name: "Daniel" },
  { id: 8, name: "Ava" },
  { id: 9, name: "James" },
  { id: 10, name: "Mia" },
];

const GridColor = () => {
  const [arr, setArr] = useState([
    { id: 3, color: false },
    { id: 90, color: false },
    { id: 35, color: false },
    { id: 0, color: false },
    { id: 55, color: false },
    { id: 22, color: false },
  ]);

  const [users, setUsers] = useState(_users);
  const [search, setSearch] = useState("");

  const [rev, setRev] = useState([]);
  const [loading, setLoading] = useState(false);
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
      const doesExist = rev?.find((i) => i?.id === id);
      if (i?.id === id) {
        if (!!doesExist === false) {
          rev.push(i);
        }
        return { ...i, color: !i?.color };
      }
      return i;
    });
    setArr(newArr);
  };

  const handleSet = async () => {
    setLoading(true);
    rev.reverse().forEach(async (item, index) => {
      await new Promise((resolve) => {
        setTimeout(() => {
          setArr((prevArr) =>
            prevArr?.map((ele) =>
              ele?.id === item?.id ? { ...ele, color: false } : ele
            )
          );
          resolve();
        }, index * 1000);
      });
      pro.then(() => {
        setLoading(false);
      });
    });
  };

  useEffect(() => {
    if (rev.length === arr.length && loading === false) {
      handleSet();
    }
  }, [JSON.stringify(rev)]);

  return (
    <>
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
      {users
        ?.filter((ele) => {
          return (
            // search.toLowerCase() === "" ||
            ele?.name.toLowerCase().includes(search.toLowerCase())
          );
        })
        .map((i) => {
          return <div>{i?.name}</div>;
        })}
      <input value={search} onChange={(e) => setSearch(e.target.value)} />
    </>
  );
};

export default GridColor;
