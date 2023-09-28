import {useMemo} from "react";

export const useSortedPosts = (posts, sort) => {
    const sortedPosts = useMemo(() => {
        if(sort){
            return [...posts].sort((a,b) => a[sort].localeCompare(b[sort]));
        }
        return posts;
    },[posts,sort]);

    return sortedPosts;
}

export const useCustomeHookPosts = (posts, sort, query) => {

    const sortedPosts = useSortedPosts(posts,sort)

    const sortedAndSearchPosts = useMemo(()=>{
        if(query){
            return sortedPosts.filter(post => (post.title.includes(query) || post.description.includes(query)))
        }else {
            return sortedPosts;
        }

    },[sort,query,posts]);

    return sortedAndSearchPosts;
}