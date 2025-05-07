import { useEffect, useState } from "react";

import {
  FormatUserData,
  FormatPerfData,
  FormatAverageSessionData,
  FormatActivityData,
} from "./DataModel";

function useFetch(path, userId) {
  const [fetchedData, setData] = useState({});

  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  let url;

  if (import.meta.env.VITE_DATA_IS_MOCKED === "true") {
    url = `${import.meta.env.VITE_BASE_URL_MOCKED}${userId}/`;

    if (path === "user") url += "user.json";
    if (path === "userActivity") url += "activity.json";
    if (path === "userAverageSessions") url += "average-sessions.json";
    if (path === "userPerformance") url += "performance.json";
  } else {
    url = `${import.meta.env.VITE_BASE_URL}${userId}/`;
    if (path === "userActivity") url += "activity";
    if (path === "userAverageSessions") url += "average-sessions";
    if (path === "userPerformance") url += "performance";
  }

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetch(url);
        const { data } = await res.json();

        if (path === "user" || !path) {
          const formattedData = new FormatUserData(data).getUserData();
          console.log("🚀 ~ fetchedData:", fetchedData);
          setData(formattedData);
        } else if (path === "userPerformance") {
          const formattedData = new FormatPerfData(data).getPerfData();
          setData(formattedData);
        } else if (path === "userAverageSessions") {
          const formattedData = new FormatAverageSessionData(
            data
          ).getAverageSessionData();
          setData(formattedData);
        } else if (path === "userActivity") {
          const formattedData = new FormatActivityData(data).getActivityData();
          setData(formattedData);
        } else {
          setData(data);
        }
      } catch (error) {
        setIsError(true);
        console.log("🚀 ~getData error:", { error });
      } finally {
        setIsLoading(false);
      }
    };

    getData();
  }, [url, path]);

  return { fetchedData, isError, isLoading };
}

export default useFetch;
