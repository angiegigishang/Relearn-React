import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Hello from './components/Hello';
import LikeButton from './components/LikeeButton';
import MouseTracker from './components/MouseTracker';
import useMousePosition from './components/useMousePosition';
import useURLLoader from './hooks/useURLLoader';

interface IShowResult {
  message :string;
  status: string;
}

function App() {
  const [ show, setShow ] = useState(true)
  //const [ data, loading] = useURLLoader('https://dog.ceo/api/breeds/image/random', [show])
  const [ data, loading] = useURLLoader('https://dog.ceo/api/breeds/image/random', [show])
  const dogResult = data as IShowResult
  const positions = useMousePosition()
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <p>
          <button onClick={() => {setShow(!show)}}>Refresh dog photo</button>
        </p>
        { loading ? <p>🐶 is reading...</p>
        : <img src={dogResult && dogResult.message}/>}
        { show && <MouseTracker/> }
        <p>x: {positions.x}, y: {positions.y}</p>
        <LikeButton/>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
