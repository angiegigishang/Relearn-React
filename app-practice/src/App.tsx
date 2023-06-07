import React from "react";
import Button, { ButtonType, ButtonSize} from "./components/Button/button";
import Alert, {AlertType} from "./components/Alert/alert";
import Menu from "./components/Menu/menu";
import MenuItem from "./components/Menu/menuItem";
import SubMenu from "./components/Menu/subMenu";

//function App() {
const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Menu defaultIndex='0' 
              onSelect={(index) => {alert('menu-test' + index)}} 
              mode="vertical"
              defaultOpenSubMenus={['2']}
        >
          <MenuItem>
            cool link 1
          </MenuItem>
          <MenuItem disabled>
            cool link 2
          </MenuItem>
          <SubMenu title="dropdown">
            <MenuItem>
              dropdown1
            </MenuItem>
            <MenuItem>
              dropdown2
            </MenuItem>
            <MenuItem>
              dropdown3
            </MenuItem>
          </SubMenu>
          <MenuItem>
            cool link 3
          </MenuItem>
        </Menu>
        
        {/* <Button onClick={(e) => {e.preventDefault(); alert('123')}}> hello</Button>
        <Button disabled btnType={ButtonType.Primary} size={ButtonSize.Large}> Disabled Button </Button>
        <Button size={ButtonSize.Large}>Large Button</Button>
        <Button size={ButtonSize.Small}>Small Button</Button>
        <Button btnType={ButtonType.Link} href="http://www.baidu.com" target="_blank">Disabled Link</Button> */}
      </header>
      {/* <div>
        <Alert alertType="success" content="alert1" header="header1"></Alert>
        <Alert alertType="danger" content="alert2"></Alert>
      </div> */}
    </div>
  );
}

export default App;
