import Axiosservice  from "./Axiosservice";
const headerConfig = {
    headers: { 
       // 'Content-Type': 'application/json',
        Authorization: localStorage.getItem("token")
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
        console.log(data)
        return axiosService.Post(url, data, headerConfig);
    }
    displayNotes(url) {
        console.log(headerConfig)
        return axiosService.Get(url, headerConfig);
    }
    changeColor(url,obj) {
        console.log(headerConfig)
        return axiosService.Post(url,obj, headerConfig);
    }
    addArchive(url,obj) {
        return axiosService.Post(url,obj, headerConfig);
    
    }
    trashNotes(url,obj) {
        return axiosService.Post(url,obj, headerConfig);
    }
    updateNotes(url,obj) {
        return axiosService.Post(url,obj, headerConfig);
}
}

export default Userservice;