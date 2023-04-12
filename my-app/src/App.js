import logo from './logo.svg';
import './App.css';
import NameCard from './components/NameCard';
import LikeButton from './components/LikesButton';
import DigitalClock from './components/DigitalClock';
import CommentBox from './components/CommentBox';
import CommentList from './components/CommentList';
import { Component } from 'react';
const tags = ['konglong', 'football']

// function App() {
//   return (
//     <div className="App">
//       <CommentBox></CommentBox>
//     </div>
//   );
// }

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      comments: ['this is my first sdfsdf']
    }
    this.addComment = this.addComment.bind(this)
  }
  addComment(comment) {
    this.setState({
      comments: [...this.state.comments, comment]
    })
    
  }
  render() {
    const { comments } = this.state
    return (
      <div>
        <CommentBox commentsLength={comments.length}
                    onAddComment={this.addComment}
        ></CommentBox>
        <CommentList comments={comments}></CommentList>
      </div>    
    )
  }
}

export default App;
