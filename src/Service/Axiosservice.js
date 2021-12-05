import axios from "axios";

class Axiosservice {
    Post(url, data){
        return axios.post(url, data);
    }

}

export default Axiosservice;