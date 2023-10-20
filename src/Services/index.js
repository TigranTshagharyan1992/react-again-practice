import axios from "axios";

export default class Services {

   static async apiCall(url,setError,page=1,limit=10){
       try {
           const result =  await axios.get(url,{
               params: {
                   _limit: limit,
                   _page: page
               }
           });
           return result;
       }catch (e) {
           setError(e)
       }
    }
    static async apiCallById(url,id,setError){
        try {
            const result =  await axios.get(url+id);
            return result;
        }catch (e) {
            setError(e)
        }
    }
    static async apiCallGetCommentsById(url,id,setError){
        try {
            const result =  await axios.get(url+id+'/comments');
            return result;
        }catch (e) {
            setError(e)
        }
    }

    static async getPagesCount (totalPages,limit) {

      const count =  await Math.ceil(totalPages/limit);

        return count;

    }
   static getPagesArray(count){

       let result = [];
       for (let i=0; i<count; i++){
            result.push(i+1);
       }
       return  result;
    }
}