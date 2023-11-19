import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";

const axiosSecure = axios.create({
    baseURL: 'http://localhost:5000'
})
const useAxiosSecure = () => {
    const navigate =useNavigate()
    const {logout}=useAuth()
    //request interceptor to add authorization header for every secure call the api
    axiosSecure.interceptors.request.use(function (config) {
        const token = localStorage.getItem('access-token')
        // console.log('req stop by interceptor', token)
        config.headers.authorization = `Bearer ${token}`
        return config;
    }, function (error) {
        return Promise.reject(error)
    })
    //response interceptor to add authorization header for every secure call the api
    axiosSecure.interceptors.response.use(function (response) {
        return response;
    },async (error) => {
        const status = error.response.status;
        console.log('status error in the interceptor ', status)
        //for 4o1 or 403 logout the user and move the user to the login pagea
        if(status === 401 || status === 403){
            await logout()
            navigate('/login')
        }
        return Promise.reject(error)
    })

    return axiosSecure

};

export default useAxiosSecure;



