import { useState, useEffect } from "react";

//Custom hooks starts with 'use'
const useFetch = (url) => {
  //state to setup our blogs
  const [data, setData] = useState(null);
  //state to check whether data is loaded or not
  const [isPending, setIsPending] = useState(true);
  //state to check whether there is error or not
  const [isError, setIsError] = useState(null);
  //Setting useEffect Hook
  useEffect(() => {
    const abortController = new AbortController();

    fetch(url, { signal: abortController.signal })
      .then((response) => {
        if (!response.ok) {
          throw Error("Couldn't fetch data");
        }
        return response.json();
      })
      .then((data) => {
        setData(data);
        setIsPending(false);
        setIsError(null);
      })
      .catch((err) => {
        if (err.name === "AbortError") {
          console.log("Aborted fetch");
        } 
        else {
          setIsError(err.message);
          setIsPending(false);
        }
      });
    return () => abortController.abort();
  }, [url]); //name dependency

  //returning object, as in this we dont require order
  return { data, isPending, isError }; //object
};

export default useFetch;
