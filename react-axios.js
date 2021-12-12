/* eslint-disable */
import axios from 'axios';
import {useState, useEffect} from 'react';

let fetchData = async (params, setData, setLoading, setLoaded, setError) => {
  try {
    // Resetting the state coz if we `refresh` we need to reset the state of the request.
    setLoading(true);
    setLoaded(false);
    setError(null);

    const {data} = await axios(...params);
    setData(data);
    setLoading(false);
    setLoaded(true);
  } catch (error) {
    setError(String(error));
    setLoaded(false);
    setLoading(false);
  }
};
export const reactAxios = (...params) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(null);

  const refreshFn = () => {
    fetchData(params, setData, setLoading, setLoaded, setError);
  };

  useEffect(refreshFn, []);

  return {data, refreshFn, error, loading, loaded};
};

/* Motivation to make this */
// import useAxios from 'react-axios-hook';
