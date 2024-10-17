import React, { useEffect, useState } from "react";
import { authInstance } from "../api/axiosInstance";

const useData = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  async function getData() {
    const { data } = await authInstance.get(url);
    setData(data);
  }

  useEffect(() => {
    getData(url);
  }, [url]);

  return { data, setData };
};

export default useData;
