import React from "react";

const CommentList = ({comments}) => {
    return (
        <div className="comment-list-comment">
            <label>list comments</label>
            <ul className="list-group mb-3">
                {
                    comments.map((comment, index) => 
                        <li key={index} className="list-group-item">{comment}</li>
                    )
                }
            </ul>
        </div>
    )
}

export default CommentList;