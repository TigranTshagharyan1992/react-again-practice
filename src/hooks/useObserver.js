import {useEffect, useRef} from "react";

export const useObserver = (ref, setPage,loader, canLoad) => {
    const observer = useRef();
    useEffect(()=>{
        if(loader) return;
        if(observer.current) observer.current.disconnect();
        let callback = (entries, observer) => {
            if(entries[0].isIntersecting && canLoad){
                setPage()
            }
        };
        observer.current = new IntersectionObserver(callback);
        observer.current.observe(ref.current);
    },[loader]);
}