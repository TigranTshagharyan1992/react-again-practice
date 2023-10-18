import axios from "axios";

export default class apiService {

   static async apiCall(url){
       const result =  await axios.get(url);
       return result.data;
    }
}