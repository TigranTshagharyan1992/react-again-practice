import React from 'react';
import PostItem from "./PostItem";
import {CSSTransition, TransitionGroup} from "react-transition-group";

const PostList = ({posts,removePost,title}) => {
    return (
        <div>
            <h1>
                {title}
            </h1>
            <TransitionGroup>
                {posts.map( (post) => {
                        const time = (new Date().getTime());
                        return <CSSTransition
                                key={post.id}
                                timeout={500}
                                classNames="post"
                        >
                            <PostItem removePost={removePost} post={post} key={time+post.id}/>
                        </CSSTransition>
                    }
                )}
            </TransitionGroup>
        </div>
    );
};

export default PostList;