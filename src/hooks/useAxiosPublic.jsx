import axios from "axios";
const axiosPublic = axios.create({
    baseURL: 'https://boss-chef-res-server.vercel.app'
})
const useAxiosPublic = () => {
    return axiosPublic
};
export default useAxiosPublic;