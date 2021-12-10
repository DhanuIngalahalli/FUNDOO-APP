import Axiosservice  from "./Axiosservice";
const headerConfig = {
    headers: { 
        'Content-Type': 'application/json',
        "Authorization": localStorage.getItem("token")
     }
}

// const headers = { Authorization: localStorage.getItem("token") };
const axiosService = new Axiosservice();

class Userservice {
    Registeration(url, data) {
        return axiosService.Post(url, data);
    }
    Login(url, data) {
        return axiosService.Post(url, data);
    }
    Forget(url, data) {
        return axiosService.Post(url, data);
    }
    Reset(url, data) {
        return axiosService.Post(url, data);
    }

    AddNote(url, data) {
        return axiosService.Post(url, data, headerConfig);
    }
    displayNotes(url) {
        console.log(headerConfig)
        return axiosService.Get(url, headerConfig);
    }
}

export default Userservice;