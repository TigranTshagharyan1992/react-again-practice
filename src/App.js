import React, {useState,useEffect} from 'react';
import './styles/App.css'
import PostList from "./Components/PostList";
import Loader from "./Components/UI/Loader";
import PostForm from "./Components/PostForm";
import PostFilter from "./Components/PostFilter";
import MyModal from "./Components/UI/MyModal/MyModal";
import MyButton from "./Components/UI/button/MyButton";
import {useCustomeHookPosts} from "./hooks/useCustomeHookPosts";
import service from "./Services";
import {useFetching} from "./hooks/useFetching";
import Pagination from "./Components/pagination/Pagination";

/**
 *
 * @returns {JSX.Element}
 * @constructor
 */
function App() {
    const postsUrl = 'https://jsonplaceholder.typicode.com/posts';
    const [pagesCount, setPagesCount] = useState([])
    const [page, setPage] = useState(1)
    const [limit, setLimit] = useState(10)
    const [posts, setPosts] = useState([]);
    const [filter, setFilter] = useState({sort: '', query: ''});
    const [visible,setVisible] =  useState(false);
    const [loader,setLoader] =  useState(false);
    const [error,setError] =  useState(false);

    const sortedAndSearchPosts = useCustomeHookPosts(posts,filter.sort,filter.query);

    // const [fetchPosts, isPostsLoading, postError] = useFetching(
    //     async()=>{
    //         const response = await service.apiCall(postsUrl);
    //         setPosts(response);
    //     }
    // )

    async function getPosts() {
        setLoader(true)
        const response = await service.apiCall(postsUrl,setError,page,limit);
        const count  = await service.getPagesCount(response.headers['x-total-count'],limit);
        setPagesCount(count);
        setPosts(response.data);
        setLoader(false);
    }
    let pagesCountArray = service.getPagesArray(pagesCount);
    useEffect(() => {
        getPosts();
    },[page]);


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
        <h2>Create Post Block</h2>
        <MyButton style={{marginTop: 10, marginBottom: 10}} onClick={modalPopup}>Show form</MyButton>
        <MyModal visible={visible} setVisible={setVisible}>
            <PostForm addPost={addPost}/>
        </MyModal>

        <PostFilter  filter={filter} setFilter={setFilter}/>
        {error &&
        <h2>some error ${error}</h2>
        }
        {!loader
        ? <PostList posts={sortedAndSearchPosts} removePost={removePost} title="Posts title"/>
        : <div style={{display: 'flex', justifyContent: 'center'}}><Loader /></div>
        }
        <Pagination pagesCountArray={pagesCountArray} setPage={setPage} page={page} />

    </div>
  );
}

export default App;
