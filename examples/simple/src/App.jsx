import {reactFetch, reactAxios} from 'react-fetch2';
import './App.css';

function App() {
  const anecdotes = reactFetch('https://loveapi.ml/fso/anecdotes.json').json();
  const patients = reactAxios('https://loveapi.ml/fso/patients.json');

  const loading = anecdotes.loading && patients.loading;
  const refreshAllFn = () => anecdotes.refreshFn() && patients.refreshFn();

  return (
    <div>
      {loading ? (
        'Loading...'
      ) : (
        <>
          <pre>{JSON.stringify(anecdotes.data, null, 2)}</pre>
          <pre>{JSON.stringify(patients.data, null, 2)}</pre>
        </>
      )}
      <button onClick={refreshAllFn}>Refresh all data...</button>
      <TestingReactFetch />
      <TestingReactAxios />
    </div>
  );
}
function TestingReactFetch() {
  const anecdotes = reactFetch('https://loveapi.ml/fso/anecdotes.json').json();

  return (
    <div>
      {!anecdotes.loaded ? (
        'Loading...'
      ) : (
        <>
          <pre>{JSON.stringify(anecdotes.data, null, 2)}</pre>
          <button onClick={() => anecdotes.refreshFn()}>
            Refresh Anecdotes
          </button>
        </>
      )}
    </div>
  );
}

function TestingReactAxios() {
  const anecdotes = reactAxios('https://loveapi.ml/fso/anecdotes.json');

  return (
    <div>
      {anecdotes.loading ? (
        'Loading...'
      ) : (
        <>
          <pre>{JSON.stringify(anecdotes.data, null, 2)}</pre>
          <button onClick={() => anecdotes.refreshFn()}>
            Refresh Anecdotes
          </button>
        </>
      )}
    </div>
  );
}
export default App;
