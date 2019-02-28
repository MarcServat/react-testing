import React, { Component } from 'react';

class CommentBox extends Component{
    state = {comment: ''};

    handleChange = (e) => {
        this.setState({ comment: e.target.value });s
    };

    handleSubmit = (e) => {
      e.preventDefault();

    };

    render() {
        return (
            <form>
                <h4>Comment Box</h4>
                <textarea onChange={this.handleChange} value={this.state.comment}/>
                <div>
                    <button>Submit</button>
                </div>
            </form>
        )
    }
}

export default CommentBox;
