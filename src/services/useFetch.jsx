import { useEffect, useState } from "react";
import FormatData from "./DataModel";

const BASE_URL = "http://localhost:5173/src/mock/";
// const BASE_URL = "http://localhost:3000/user/";

function useFetch(path, userId, options) {
  const [fetchedData, setData] = useState({});

  let url = `${BASE_URL}${userId}/`;

  if (path === "user") url += "user.json";
  if (path === "userActivity") url += "activity.json";
  if (path === "userAverageSessions") url += "average-sessions.json";
  if (path === "userPerformance") url += "performance.json";

  // if (path === "userActivity") url += "activity";
  // if (path === "userAverageSessions") url += "average-sessions";
  // if (path === "userPerformance") url += "performance";

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetch(url);
        const data = await res.json();

        if (options === "formatData") {
          const formattedData = new FormatData(data.data).getUserData();
          setData(formattedData);
        } else {
          setData(data.data);
        }
      } catch (error) {
        console.log("🚀 ~getData error:", error);
      }
    };
    getData();
  }, [url, options]);

  return fetchedData;
}

export default useFetch;
