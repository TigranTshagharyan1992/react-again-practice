import {useState} from "react";

export const useFetching = (api) =>{
    const [loader,setLoader] =  useState(false);
    const [error,setError] =  useState(false);

    const fetching = async () =>{
        try {
            setLoader(true)
            await api();
        }catch (e){
            setError(e)
        } finally {
            setLoader(false)
        }
    }
    return [fetching,loader,error];
}