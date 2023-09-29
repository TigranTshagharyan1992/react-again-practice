import React, {useState,useEffect} from 'react';
import Counter from "./Components/Counter";
import ClassCounter from "./Components/ClassCounter";
import './styles/App.css'
import PostList from "./Components/PostList";
import PostForm from "./Components/PostForm";
import PostFilter from "./Components/PostFilter";
import MyModal from "./Components/UI/MyModal/MyModal";
import MyButton from "./Components/UI/button/MyButton";
import {useCustomeHookPosts} from "./hooks/useCustomeHookPosts";
import axios from "axios";

/**
 *
 * @returns {JSX.Element}
 * @constructor
 */
function App() {
    const [value, setValue] = useState('');
    const [posts, setPosts] = useState([]);
    const [filter, setFilter] = useState({sort: '', query: ''});
    const [visible,setVisible] =  useState(false);
    const sortedAndSearchPosts = useCustomeHookPosts(posts,filter.sort,filter.query);

    /**
     *
     * @param post
     */
    const addPost = (post) => {
        setPosts([...posts, post]);
        setVisible(false);
    }

    /**
     *
     * @param deletePost
     */
    const removePost = (deletePost) => {
        setPosts(posts.filter(post => {
            return post.id !== deletePost.id;
        }));
    }

    /**
     *
     */
    function modalPopup(){
        setVisible(!visible);
    }

    async function fetchPosts() {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        setPosts(response.data);
    }
    useEffect(() => {
        fetchPosts();
    },[])
    return (
    <div className="App">

        {/*<input type="text" value={value} onChange={event => setValue(event.target.value)}/>*/}
        {/*<Counter />*/}
        {/*<ClassCounter />*/}
        <h2>Create Post Block</h2>
        <MyButton style={{marginTop: 10, marginBottom: 10}} onClick={modalPopup}>Show form</MyButton>
        <MyModal visible={visible} setVisible={setVisible}>
            <PostForm addPost={addPost}/>
        </MyModal>

        <PostFilter posts={sortedAndSearchPosts} filter={filter} setFilter={setFilter}/>
        {posts.length !== 0
        ? <PostList posts={sortedAndSearchPosts} removePost={removePost} title="Posts title"/>
        : <h2>we dont have posts</h2>
        }
    </div>
  );
}

export default App;
