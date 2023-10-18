import axios from "axios";

export default class apiService {

   static async apiCall(url,setError){
       try {
           const result =  await axios.get(url);
           return result;
       }catch (e) {
           setError(e)
       }


    }
}