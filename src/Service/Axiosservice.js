import axios from "axios";

class Axiosservice {
    Post(url, data,headers=false){
        return axios.post(url, data,headers);
    }
    Get(url,headers=false){
        return axios.get(url,headers)
    }
    

}

export default Axiosservice;