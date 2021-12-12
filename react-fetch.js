/* eslint-disable */
import {useState, useEffect} from 'react';

// reactFetch has the same api as browser fetch as all paramters are passed directly to fetch function.
async function fetchData(
  params,
  dataType,
  setData,
  setLoading,
  setLoaded,
  setError
) {
  try {
    // Resetting the state coz if we `refresh` we need to reset the state of the request.
    setLoading(true);
    setLoaded(false);
    setError(null);

    const data = await (await fetch(...params))[dataType](); // dataType = 'json' or 'text'
    setData(data);
    setLoading(false);
    setLoaded(true);
  } catch (error) {
    setError(String(error));
    setLoaded(false);
    setLoading(false);
  }
}

const useFetch = (params, dataType) => {
  {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [loaded, setLoaded] = useState(false);
    const [error, setError] = useState(null);

    const refreshFn = () =>
      fetchData(params, dataType, setData, setLoading, setLoaded, setError);

    useEffect(refreshFn, []);

    return {data, refreshFn, error, loading, loaded};
  }
};

export const reactFetch = (...params) => ({
  text: () => useFetch(params, 'text'),
  json: () => useFetch(params, 'json'),
});

// Below library is for only class components, and its  not maintainer at all.
// https://www.npmjs.com/package/react-fetch

// Below example didn't work very well see its docs for more info, also the documentation is not updated, as first example is not working.
// import {useFetch} from 'react-fetch-hook';
