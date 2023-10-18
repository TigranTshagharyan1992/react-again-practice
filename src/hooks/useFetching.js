import {useState} from "react";

export const useFetching = (callback) =>{
    const [loader,setLoader] =  useState(false);
    const [error,setError] =  useState(false);

    const fetching = async () =>{
        try {
            setLoader(true)
            await callback();
        }catch (e){
            setError(e)
        } finally {
            setLoader(false)
        }
    }
    return [fetching,loader,error];
}