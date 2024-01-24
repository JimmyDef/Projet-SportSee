import { useEffect, useState } from "react";

function useFetch(url) {
  const [data, setData] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetch(url);
        const data = await res.json();
        setData(data);
        if (!res.ok) {
          throw new Error("HTTP error");
        }
      } catch (error) {
        console.log("🚀 ~getData error:", error);
      }
    };
    getData();
  }, [url]);
  console.log("🚀 ~ data:", data);
  return data;
}

export default useFetch;
