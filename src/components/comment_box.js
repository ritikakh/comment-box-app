import React, { Component } from 'react';

export default class CommentBox extends Component {

    constructor(props){
        super(props);

        this.state = {comment: ''};
    }

    onHandleChange(event) {
        console.log(event.target.value);
        this.setState({ comment: event.target.value });
    }

    render() {
        return (
            <div className="comment-box">
                <textarea
                    value={this.state.comment}
                    onChange={this.onHandleChange.bind(this)} />
                <button>Submit Comment</button>
            </div>
        );
    }
}