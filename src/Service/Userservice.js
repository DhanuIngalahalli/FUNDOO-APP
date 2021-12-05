import Axiosservice  from "./Axiosservice";

const axiosService = new Axiosservice();

class Userservice {
    //Registration (url, data){
    //    return axiosService.Post(url,data);
    //}
    //Login (url, data){
      // return axiosService.Post(url,data);
    //}
    Forget(url, data){
        return axiosService.Post(url,data);
    }
    //Reset(url, data){
    //    return axiosService.Post(url, data);
    //}
}

export default Userservice;