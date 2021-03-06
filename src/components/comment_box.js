import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class CommentBox extends Component {

    constructor(props){
        super(props);

        this.state = {comment: ''};
    }

    onHandleChange(event) {
        //console.log(event.target.value);
        this.setState({ comment: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();

        this.props.saveComment(this.state.comment);
        this.setState({comment: ''});
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit.bind(this)} className="comment-box">
                <h6>Add a comment</h6>
                <textarea
                    value={this.state.comment}
                    onChange={this.onHandleChange.bind(this)} />
                <div>
                    <button action="submit">Submit Comment</button>
                </div>
            </form>
        );
    }
}

export default connect(null, actions)(CommentBox);