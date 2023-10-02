import axios from "axios";

export default class apiService {

   static async apiCall(url){
       try {
           const result =  await axios.get('https://jsonplaceholder.typicode.com/posts');
           return result.data;
       }catch (e) {
           console.log('error is =>'+e);
       }


    }
}