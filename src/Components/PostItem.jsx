import React from 'react';
import MyButton from "./UI/button/MyButton";

const PostItem = ({removePost,post}) => {
    return (
        <div className="App">
            <div className="posts">
                <div className="post__content">
                    <strong id={post.id}>{post.title}</strong>
                    <div>
                        {post.description}
                    </div>
                </div>
                <div className="post__button">
                    <MyButton onClick={() =>removePost(post)} id={'delete-button'}>Delete</MyButton>
                </div>
            </div>
        </div>
    );
};

export default PostItem;