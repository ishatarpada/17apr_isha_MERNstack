import { useEffect, useState } from "react";

export default function useHttp(url) {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    setLoader(true);
    fetch(url)

      .then((response) => {
        return response.json();
      })

      .then((data) => {
        setData(data);
        setLoader(false)
      })

      .catch((error) => {
        setError(error);
        setLoader(false)
      })
  }, [])

  return {
    data,
    error,
    loader
  }
}
