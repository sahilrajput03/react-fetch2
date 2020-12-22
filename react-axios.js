/* eslint-disable */
import axios from 'axios';
import {useState, useEffect} from 'react';

export const reactAxios = (...params) => {
  const [anecdotes, setAnecdotes] = useState(null);
  const [error, setError] = useState(null);
  useEffect(() => {
    let asyncFun = async () => {
      try {
        const {data} = await axios(...params);
        setAnecdotes(data);
      } catch (error) {
        setError(String(error));
      }
    };
    asyncFun();
  }, []);

  const refresh = () => {
    /* 100% same code as used in useEffect */
    let asyncFun = async () => {
      try {
        setError(undefined);
        const {data} = await axios(...params);
        setAnecdotes(data);
      } catch (error) {
        setError(String(error));
      }
    };
    asyncFun();
  };
  return [anecdotes, refresh, error];
};

/* Motivation to make this */
// import useAxios from 'react-axios-hook';

