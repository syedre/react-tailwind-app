import React, { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [error, setError] = useState();

  async function getData() {
    try {
      setLoading(true);
      const data = await fetch(url);
      const res = await data?.json();
      setData(res);
      setLoading(false);
    } catch (err) {
      setError(err);
      console.log(err);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  return [loading, data, error];
};
