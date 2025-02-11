import { useEffect, useState } from "react";
import { BASE_URL } from "../utils/constants";

const useFetch = (url, defaultValue = []) => {
  const [data, setData] = useState(defaultValue);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch(BASE_URL + url)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, [url]);
  return [data, loading];
};
export default useFetch;
