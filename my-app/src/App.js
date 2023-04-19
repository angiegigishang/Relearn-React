import logo from './logo.svg';
import './App.css';
import NameCard from './components/NameCard';
import LikeButton from './components/LikesButton';
import DigitalClock from './components/DigitalClock';
import CommentBox from './components/CommentBox';
import CommentList from './components/CommentList';
import { Component } from 'react';
import ThemeContext from './theme-context';
import ThemedBar from './components/ThemedBar';

const tags = ['konglong', 'football']
const themes = {
  light: {
    classnames: 'btn btn-primary',
    bgColor: '#eeeeee',
    color: '#000'
  },
  dark: {
    classnames: 'btn btn-light',
    bgColor: '#222222',
    color: '#fff'
  }
}

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      theme: 'light'
    }
    this.changeTheme = this.changeTheme.bind(this)
  }
  changeTheme(theme) {
    this.setState({
      theme
    })
  }
  render() {
    //const { comments } = this.state
    return (
      <ThemeContext.Provider value={themes[this.state.theme]}>
        <div>
          <a href="#theme-switcher"
            className="btn btn-light"
            onClick={() => {this.changeTheme('light')}}
          >
            light theme
          </a>
          <a href="#theme-switcher"
            className='btn btn-secondary'
            onClick={() => {this.changeTheme('dark')}}
          >
            deep theme
          </a>
          <ThemedBar></ThemedBar>
        </div>  
      </ThemeContext.Provider>  
    )
  }
}

export default App;
