import React from "react";

class CommentBox extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            value: ''
        }
        //this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    // handleChange(event) {
    //     this.setState({
    //         value: event.target.value
    //     })
    // }
    handleSubmit(event) {
        //alert(this.textInput.value)
        event.preventDefault()
        this.props.onAddComment(this.textInput.value)
    }
    render() {
        return (
            <form className="p-5" onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label>liu yan</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="please enter"
                      ref={(textInput) => {this.textInput = textInput}}
                    //   onChange={this.handleChange}
                    //   value={this.state.value}
                    />
                </div>
                <button type="submit" className="btn btn-primary">liu yan</button>
                <p>yi you{this.props.commentsLength}</p>
            </form>
        )
    }
}

export default CommentBox;