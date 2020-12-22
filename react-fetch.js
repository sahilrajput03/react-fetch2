/* eslint-disable */
import { useState, useEffect } from "react";
// reactFetch has the same api as browser fetch as all paramters are passed directly to fetch function.
export const reactFetch = (...params) => {
  return {
    text: () => {
      const [anecdotes, setAnecdotes] = useState();
      const [error, setError] = useState();
      useEffect(() => {
        let asyncFun = async () => {
          try {
            const data = await (await fetch(...params)).text();
            setAnecdotes(data);
          } catch (error) {
            setError(String(error));
          }
        };
        asyncFun();
      }, []);
      const refresh = () => {
        let asyncFun = async () => {
          try {
            setError(undefined);
            const data = await (await fetch(...params)).text();
            setAnecdotes(data);
          } catch (error) {
            setError(String(error));
          }
        };
        asyncFun();
      };
      return [anecdotes, refresh, error];
    },
    json: () => {
      const [anecdotes, setAnecdotes] = useState();
      const [error, setError] = useState();
      useEffect(() => {
        let asyncFun = async () => {
          try {
            const data = await (await fetch(...params)).text();
            setAnecdotes(data);
          } catch (error) {
            setError(String(error));
          }
        };
        asyncFun();
      }, []);
      const refresh = () => {
        let asyncFun = async () => {
          try {
            setError(undefined);
            const data = await (await fetch(...params)).text();
            setAnecdotes(data);
          } catch (error) {
            setError(String(error));
          }
        };
        asyncFun();
      };
      return [anecdotes, refresh, error];
    },
  };
};

// Below library is for only class components, and its  not maintainer at all.
// https://www.npmjs.com/package/react-fetch

// Below example didn't work very well see its docs for more info, also the documentation is not updated, as first example is not working.
// import {useFetch} from 'react-fetch-hook';
