import React, { useState, useEffect, startTransition } from 'react';
import './App.css';
import LikeButton from './components/LikeeButton';
import { start } from 'repl';

interface IShowResult {
  message :string;
  status: string;
}

interface IThemeProps {
  [key: string]: {color: string; background: string;}
}
const themes :IThemeProps = {
  'light': {
    color: '#000',
    background: '#eee'
  },
  'dark': {
    color: '#fff',
    background: '#222'
  }
}

export const ThemeContext = React.createContext(themes.light)

//function App() {
const App: React.FC = () => {
  const [show, setShow] = useState(true)
  const [ counter, setCounter ] = useState(0)
  const [ input, setInput ] = useState('')
  const [ searchData, setSearchData ] = useState<number[]>([])
  console.log('update one time', show, counter)
  const updateInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setInput(value)
    startTransition(() => {
      const arr = Array.from({ length: 10000 }, (_, i) => new Date().getTime() + i)
      setSearchData(arr)
    })
  }
  const batchUpdate = () => {
    setShow(!show)
    setCounter(counter + 1)
  }
  useEffect(() => {
    setTimeout(() => {
      batchUpdate()
    }, 2000)
  }, [])
  return (
    <div className="App">
      {/* <ThemeContext.Provider value={themes.dark}> */}
      <header className="App-header">
        {/* <LikeButton/>  */}
        <p>
          <button onClick={batchUpdate}>Batch update</button>
          <input value={input} type="text" onChange={updateInput}/>
          {searchData.map(d => <option key={d}>{d}</option>)}
        </p> 
      </header>
      {/* </ThemeContext.Provider> */}
    </div>
  );
}

export default App;
