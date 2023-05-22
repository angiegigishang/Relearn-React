import React, { useState, useEffect, startTransition, useTransition, Suspense } from 'react';
import './App.css';
import Button, { ButtonSize, ButtonType} from './components/Button/button';


//function App() {
const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <div>test</div>
        <Button disabled>hello</Button>
        <Button btnType={ButtonType.Primary} size={ButtonSize.Large}> hello</Button>
        <Button btnType={ButtonType.Link} href="www.baidu.com" disabled>Baidu Link</Button>
      </header>
    </div>
  );
}

export default App;
