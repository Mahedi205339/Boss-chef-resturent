import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { FaTrashAlt, FaUsers } from "react-icons/fa";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";


const AllUsers = () => {
    const axiosSecure = useAxiosSecure()
    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users' )
            return res.data;
        }
    })

    const handleMakeAdmin = user => {
        axiosSecure.patch(`users/admin/${user._id}`)
            .then(res => {
                console.log(res.data)
                if (res.data.modifiedCount > 0) {
                    refetch()
                    Swal.fire({
                        position: "center",
                        title: `${user.name} is an Admin now`,

                        icon: "success",
                        showCancelButton: false,
                    })
                }
            })


    }

    const handleDeleteUser = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                axiosSecure.delete(`/users/${id}`)
                    .then(res => {
                        console.log(res.data)
                        if (res.data.deletedCount > 0) {
                           
                            refetch()
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your Item has been deleted.",
                                icon: "success"
                            });
                        }
                    })
            }
        });
    }

    return (
        <div>
            <Helmet>
        <title>Boss Chef | All User</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
            <div className="flex justify-evenly my-4">
                <h2 className="text-base md:text-xl lg:text3xl">All Users</h2>
                <h2 className="text-base md:text-xl lg:text3xl">Total Users : {users.length}</h2>
            </div>
            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => <tr key={user._id}>

                                <th>{index + 1}</th>
                                <th>{user.name}</th>
                                <td>{user.email}</td>
                                <td>
                                    {user.role === 'admin' ?
                                        'Admin' :

                                        <button
                                        onClick={()=>handleMakeAdmin(user)}
                                            className=""><FaUsers className="text-2xl text-[#BB8506] hover:text-3xl"></FaUsers>
                                        </button>}
                                </td>
                                <td>
                                    <button
                                        onClick={() => handleDeleteUser(user._id)}
                                        className=""><FaTrashAlt className="text-2xl text-[#BB8506] hover:text-3xl"></FaTrashAlt>
                                    </button>
                                </td>
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default AllUsers;