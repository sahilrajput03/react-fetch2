import {reactFetch, reactAxios} from 'react-fetch2';
import './App.css';

function App() {
  return (
    <div>
      <ReactFetchEg />
      <ReactAxiosEg />
    </div>
  );
}
function ReactFetchEg() {
  const anecdotes = reactFetch('https://loveapi.ml/fso/anecdotes.json').json();
  const patients = reactFetch('https://loveapi.ml/fso/patients.json').json();
  // From anecdoes and patients: you can access the data, loading<boolean>, loaded<boolean>, error<string>, and refreshFn<function>.

  const loading = anecdotes.loading && patients.loading;
  console.log(patients);

  const refreshAllFn = () => {
    anecdotes.refreshFn();
    patients.refreshFn();
  };

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
    </div>
  );
}

function ReactAxiosEg() {
  const anecdotes = reactAxios('https://loveapi.ml/fso/anecdotes.json');
  // From anecdotes: you can access the data, loading<boolean>, loaded<boolean>, error<string>, and refreshFn<function>.

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
