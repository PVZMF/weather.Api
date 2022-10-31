import axios from "axios";

const api = axios.create({
    baseURL: "",

})

api.interceptors.request.use(
    function (config){
        return config;
    },
    function (error){
        return Promise.reject(error);
    }
)

api.interceptors.response.use(
    function (config){

        return config;
    },
    function (error){
        if (error.response.status == 401){
            // try to get new access token with refresh token
            // try the request again
            // logout user and redirect to login page if error
        }
        return Promise.reject(error);
    }
)

export default api;