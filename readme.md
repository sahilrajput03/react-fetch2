# Usage -

For running example, visit codesand box link [here](https://codesandbox.io/s/react-request-npm-package-example-gxi5x?file=/src/App.js).

```js

import {reactFetch, reactAxios} from 'react-fetch2'; 

//For using reactFetch
export default function App() {
    const [anecdotes, refresh, error] = reactFetch(
    'https://loveapi.ml/fso/anecdotes.json'
  ).text();
  const [loveapiml, refresh2, error2] = reactFetch(
    'https://loveapi.ml/'
  ).json();

  return <div>...<div>
}

//For using reactAxios
export default function App() {
  const [anecdotes, refresh, error] = reactAxios(
    'https://loveapi.ml/fso/anecdotes.json'
  );
  const [loveapiml, r2, error2] = reactAxios('https://loveapi.ml/');

  return <div>...<div>
}

```
