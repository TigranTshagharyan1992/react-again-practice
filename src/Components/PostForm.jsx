import React, {useState} from 'react';
import MyInput from "./UI/input/MyInput";
import MyButton from "./UI/button/MyButton";

const PostForm = ({addPost}) => {

    const [post, setPost] = useState({title: '', description: ''})

    const addPostLocal = (event) => {
        event.preventDefault();
        if(post.title && post.description){
            const time = new Date().getTime() / 1000;
            const newPost = {id:time, title: post.title, description: post.description};
            addPost(newPost);
            setPost({title: '', description: ''})
        }
    }
    return (
            <form>
                <MyInput
                    value={post.title}
                    onChange={event => setPost({...post, title: event.target.value})}
                    type="text"
                    placeholder="Name"
                />
                <MyInput
                    value={post.description}
                    onChange={event => setPost({...post, description: event.target.value})}
                    type="text"
                    placeholder="Description"
                />
                <MyButton id="myButton" onClick={addPostLocal}>Create Post</MyButton>
            </form>
    );
};

export default PostForm;