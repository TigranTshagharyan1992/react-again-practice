import React from 'react';
import PostItem from "./PostItem";

const PostList = ({posts,removePost,title}) => {
    return (
        <div>
            <h1>{title}</h1>
            {posts.map( (post) => {
                    const time = (new Date().getTime());
                    return <PostItem removePost={removePost} post={post} key={time+post.id}/>
                }
            )}
        </div>
    );
};

export default PostList;