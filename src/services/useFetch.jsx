import { useEffect, useState } from "react";

function useFetch(url, userInfos) {
  const [data, setData] = useState([]);

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
  // if (userInfos) return;
  return data;
}

export default useFetch;
