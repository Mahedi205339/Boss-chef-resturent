import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { FaBox, FaDollarSign, FaList, FaUsers } from "react-icons/fa";

const AdminHome = () => {
    const { user } = useAuth()
    const axiosSecure = useAxiosSecure()

    const { data: stats = {} } = useQuery({
        queryKey: ['admin-stats'],
        queryFn: async () => {
            const res = await axiosSecure.get('/admin-stats');
            return res.data;
        }
    })

    return (
        <div className="text-center ">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold my-5 md:my-10'">

                Hi, Welcome 
                <span className="font-bold ml-2 text-[#D1A054]">
                 {
                    user?.displayName ? user.displayName : 'Back'
                } </span>
            </h2>
            <div className="stats gap-3 text-white">

                <div className="stat bg-gradient-to-r from-cyan-500 to-blue-500 my-5 md:my-10 rounded-lg p-5">
                    <div className="stat-figure text-secondary ml-4">
                        <FaDollarSign className="text-3xl md:text-4xl lg:text-5xl"></FaDollarSign>
                    </div>
                    <div className="stat-title text-xl font-semibold">Revenue</div>
                    <div className="stat-value">{stats.revenue}</div>
                    
                </div>
                <div className="stat bg-gradient-to-r from-purple-500 to-pink-500 my-5 md:my-10 rounded-lg p-5">
                    <div className="stat-figure text-secondary ml-4">
                        <FaUsers className="text-3xl md:text-4xl lg:text-5xl text-blue-800"></FaUsers>
                    </div>
                    <div className="stat-title text-xl font-semibold">Users</div>
                    <div className="stat-value">{stats.users}</div>
                    
                </div>
                <div className="stat  bg-gradient-to-r from-cyan-500 to-blue-500 my-5 md:my-10 rounded-lg p-5">
                    <div className="stat-figure text-secondary ml-4">
                        <FaBox className="text-3xl md:text-4xl lg:text-5xl text-blue-800"></FaBox>
                    </div>
                    <div className="stat-title text-xl font-semibold">Orders</div>
                    <div className="stat-value">{stats.orders}</div>
                    
                </div>
                <div className="stat bg-gradient-to-r from-violet-500 to-fuchsia-500 my-5 md:my-10 rounded-lg p-5">
                    <div className="stat-figure text-secondary ml-4">
                        <FaList className="text-3xl md:text-4xl lg:text-5xl text-blue-800"></FaList>
                    </div>
                    <div className="stat-title text-xl font-semibold">Total Items</div>
                    <div className="stat-value">{stats.menuItems}</div>
                    
                </div>
            

            </div>
        </div>
    );
};

export default AdminHome;