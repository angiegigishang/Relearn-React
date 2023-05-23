import React from "react";
import Button, { ButtonType, ButtonSize} from "./components/Button/button";

//function App() {
const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Button> hello</Button>
        <Button disabled btnType={ButtonType.Primary} size={ButtonSize.Large}> hello </Button>
        <Button btnType={ButtonType.Link} href="http://www.baidu.com">hello</Button>
        <Button size={ButtonSize.Large}>dfsfd</Button>
        <Button size={ButtonSize.Small}>dfsfd</Button>
      </header>
    </div>
  );
}

export default App;
