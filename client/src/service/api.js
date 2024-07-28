import axios from 'axios';

const API_URL='http://localhost:8000';

const axiosInstance = axios.create({
    baseURL:API_URL,
    timeout:10000,
    headers:{
        "content-type":" application/json"
    }
})
axiosInstance.interception.request.use(
    function (config){
        return config;

    },
    function(error){
        return Promise.reject(error);
    }
)
axiosInstantce.interception.request.use(
    function(response){
        //stop global loader here
        return processResponse(response);
    },
    function(error){

        return Promise.reject(processError(response))

    }
)
// If success -> returns { isSuccess: true, data: object }
// If fail -> returns { isFailure: true, status: string, msg: string, code: int }

const processResponse = (response) => {
    if (response?.status === 200) {
        return { isSuccess: true, data: response.data }
    } else {
        return {
            isFailure: true,
            status: response?.status,
            msg: response?.msg,
            code: response?.code
        }
    }
}

const processError=(error) => {
    if(error.response){
         // Request made and server responded with a status code 
    // that falls out of the range of 2xx   
    }else if(error.request){
        // The request was made but no response was received

    }else{
        // Something happened in setting up the request that triggered an Error

    }
}