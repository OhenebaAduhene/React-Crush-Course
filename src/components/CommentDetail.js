import React from 'react';
import faker from 'faker';

const CommentDetail = (props) => {
    // console.log(props)
    return (
    
        <div className="comment">
            <a href="/" className="avatar">
                <img alt="avatar" src={faker.image.cats()}/>
            </a>
            <div className="content">
                <a href="/" className="author">
                    {props.author}
                </a>
                <div className="metadata">
                    <span className="date">{props.time}</span>
                </div>
                <div className="text">Nice bog post!</div>
            </div>
        </div>

    );
}

export default CommentDetail;