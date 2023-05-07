import React from "react";

const useApiData = (url) => {
  const BASE_URL = ``;
  const [data, setData] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);

  const fetchData = async (url) => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const json = await response.json();
      setData(json);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  React.useEffect(() => {
    let mounted = true;
    if (mounted) {
      fetchData(url);
    }
    return () => {
      mounted = false;
    };
  }, [url]);

  return { data, loading, error };
};

export default useApiData;
