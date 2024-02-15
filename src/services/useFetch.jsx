import { useEffect, useState } from "react";

import {
  FormatUserData,
  FromatPerfData,
  FormatAverageSessionData,
  FormatActivityData,
} from "./DataModel";

function useFetch(path, userId) {
  const [fetchedData, setData] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  let url = `${import.meta.env.VITE_BASE_URL_MOCKED}${userId}/`;
  if (path === "user") url += "user.json";
  if (path === "userActivity") url += "activity.json";
  if (path === "userAverageSessions") url += "average-sessions.json";
  if (path === "userPerformance") url += "performance.json";

  // let url = `${import.meta.env.VITE_BASE_URL}${userId}/`;
  // if (path === "userActivity") url += "activity";
  // if (path === "userAverageSessions") url += "average-sessions";
  // if (path === "userPerformance") url += "performance";

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetch(url);
        const data = await res.json();

        if (path === "user" || !path) {
          const formattedData = new FormatUserData(data.data).getUserData();
          setData(formattedData);
        } else if (path === "userPerformance") {
          const formattedData = new FromatPerfData(data.data).getPerfData();

          setData(formattedData);
        } else if (path === "userAverageSessions") {
          const formattedData = new FormatAverageSessionData(
            data.data
          ).getAverageSessionData();

          setData(formattedData);
        } else if (path === "userActivity") {
          const formattedData = new FormatActivityData(
            data.data
          ).getActivityData();

          setData(formattedData);
        } else {
          setData(data.data);
        }
      } catch (error) {
        setError(error);
        console.log("🚀 ~getData error:", error);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, [url, path]);

  return { fetchedData, error, loading };
}

export default useFetch;
