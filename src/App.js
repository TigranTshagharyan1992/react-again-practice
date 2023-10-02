import React, {useState,useEffect} from 'react';
import './styles/App.css'
import PostList from "./Components/PostList";
import PostForm from "./Components/PostForm";
import PostFilter from "./Components/PostFilter";
import MyModal from "./Components/UI/MyModal/MyModal";
import MyButton from "./Components/UI/button/MyButton";
import {useCustomeHookPosts} from "./hooks/useCustomeHookPosts";
import apiService from "./Serivicies";

/**
 *
 * @returns {JSX.Element}
 * @constructor
 */
function App() {
    const [posts, setPosts] = useState([]);
    const [filter, setFilter] = useState({sort: '', query: ''});
    const [visible,setVisible] =  useState(false);
    const [loader,setLoader] =  useState(false);
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

    async function getPosts() {
        setLoader(true);
        setTimeout(async ()=>{
            const response = await apiService.apiCall();
            setPosts(response);
            setLoader(false);
        },500)
    }

    useEffect(() => {
        getPosts();
    },[])

    return (
    <div className="App">
        <h2>Create Post Block</h2>
        <MyButton style={{marginTop: 10, marginBottom: 10}} onClick={modalPopup}>Show form</MyButton>
        <MyModal visible={visible} setVisible={setVisible}>
            <PostForm addPost={addPost}/>
        </MyModal>

        <PostFilter  filter={filter} setFilter={setFilter}/>
        {!loader
        ? <PostList posts={sortedAndSearchPosts} removePost={removePost} title="Posts title"/>
        : <h2>Loading....</h2>
        }
    </div>
  );
}

export default App;
