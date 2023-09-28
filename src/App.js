import React, {useMemo, useState} from 'react';
import Counter from "./Components/Counter";
import ClassCounter from "./Components/ClassCounter";
import './styles/App.css'
import PostList from "./Components/PostList";
import PostForm from "./Components/PostForm";
import PostFilter from "./Components/PostFilter";
import MyModal from "./Components/UI/MyModal/MyModal";
import MyButton from "./Components/UI/button/MyButton";

/**
 *
 * @returns {JSX.Element}
 * @constructor
 */
function App() {
    const [value, setValue] = useState('');
    const [posts, setPosts] = useState([
        {id:1, title:'b', description:'ccc'},
        {id:2, title:'a', description:'bbb'},
        {id:3, title:'c', description:'aaa'}
    ]);
    const [filter, setFilter] = useState({sort: '', query: ''})
    const [visible,setVisible] =  useState(false)
    const sortedPosts = useMemo(() => {
        if(filter.sort){
            return [...posts].sort((a,b) => a[filter.sort].localeCompare(b[filter.sort]));
        }
        return posts;
    },[posts,filter.sort]);

    const sortedAndSearchPosts = useMemo(()=>{
        if(filter.query){
            return sortedPosts.filter(post => post.title.includes(filter.query))
        }else {
            return sortedPosts;
        }

    },[filter.sort,filter.query,posts]);


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

    return (
    <div className="App">
        <input type="text" value={value} onChange={event => setValue(event.target.value)}/>
        <Counter />
        <ClassCounter />
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
