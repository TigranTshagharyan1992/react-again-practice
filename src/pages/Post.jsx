import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import service from "../Services";
import Loader from "../Components/UI/Loader";

const Post = () => {
    const params = useParams();
    const [post,setPost] = useState([]);
    const [postComments,setPostComments] = useState([]);
    const [loader,setLoader] =  useState(false);
    const postsUrl = 'https://jsonplaceholder.typicode.com/posts/';
    const [error,setError] =  useState(false);
    async function getPosts() {
        setLoader(true)
        const response = await service.apiCallById(postsUrl,params['id'],setError);
        const responseComments = await service.apiCallGetCommentsById(postsUrl,params['id'],setError);
        setPost(response.data);
        setPostComments(responseComments.data);
        setLoader(false)
    }
    useEffect(() => {
        getPosts();
    },[]);
    return (
        <div>
            {error &&
            <h2>some error ${error}</h2>
            }
            {!loader
                ?  <div>
                    <h1>title: {post.title}</h1>
                    <div>body: {post.body}</div>
                    <div>comments: {
                        postComments.map( (comment => {
                            return (<div style={{marginTop: 15}}>
                                <p>name: {comment.name}</p>
                                <p>email: {comment.email}</p>
                                <div>comment: {comment.body}</div>
                            </div>)
                    }) )
                    }</div>
            </div>
                : <div style={{display: 'flex', justifyContent: 'center'}}><Loader /></div>
            }

        </div>
    );
};

export default Post;