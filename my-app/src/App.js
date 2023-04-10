import logo from './logo.svg';
import './App.css';
import NameCard from './components/NameCard';
import LikeButton from './components/LikesButton';
const tags = ['konglong', 'football']

function App() {
  return (
    <div className="App">
      <LikeButton></LikeButton>
    </div>
  );
}

export default App;
