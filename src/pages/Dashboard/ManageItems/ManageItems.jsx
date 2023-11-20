import { FaEdit, FaTrashAlt } from "react-icons/fa";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import useMenu from "../../../hooks/useMenu";


const ManageItems = () => {
    const [menu, refetch] = useMenu()
    const axiosSecure = useAxiosSecure()

    // const handleDeleteItem = (item) => {
    //     Swal.fire({
    //         title: "Are you sure?",
    //         text: "You won't be able to revert this!",
    //         icon: "warning",
    //         showCancelButton: true,
    //         confirmButtonColor: "#3085d6",
    //         cancelButtonColor: "#d33",
    //         confirmButtonText: "Yes, delete it!"
    //     }).then(async (result) => {
    //         if (result.isConfirmed) {

    //             const res = await axiosSecure.delete(`/menu/${item._id}`)
    //             console.log(res.data)
    //                 .then(res => {
    //                     if (res.data.deletedCount > 0) {
    //                         refetch()
    //                         Swal.fire({
    //                             title: "Deleted!",
    //                             text: `${item.name} has been deleted.`,
    //                             icon: "success",
    //                             timer: 1500
    //                         });
    //                     }
    //                 })
    //         }
    //     });
    // }

    const handleDeleteItem = (item) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                const res = await axiosSecure.delete(`/menu/${item._id}`);
                console.log(res.data)

                refetch()
                Swal.fire({
                    title: "Deleted!",
                    text: "Your Item has been deleted.",
                    icon: "success",
                    timer: 1500
                });
            }

        });
    }
    return (
        <div>
            <SectionTitle
                heading="Manage All Items"
                subHeading="Hurry Up"
            ></SectionTitle>
            <div>
                <div className="flex justify-evenly my-4">
                    <h2 className="text-base md:text-xl lg:text3xl">All Users</h2>
                    <h2 className="text-base md:text-xl lg:text3xl">Total Users : {menu.length}</h2>
                </div>
                <div className="overflow-x-auto">
                    <table className="table table-zebra w-full">
                        {/* head */}
                        <thead>
                            <tr>
                                <th></th>
                                <th>Image</th>
                                <th>Name</th>
                                <th>Update</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                menu.map((item, index) => <tr key={item._id}>

                                    <th>{index + 1}</th>
                                    <th><img className="w-20 rounded-xl" src={item.image} alt="" /></th>
                                    <td>{item.name}</td>
                                    <td>
                                        <button className="">
                                            <FaEdit className="text-2xl text-[#BB8506] hover:text-3xl"></FaEdit>
                                        </button>
                                    </td>

                                    <td>
                                        <button onClick={() => handleDeleteItem(item)}>
                                            <FaTrashAlt className="text-2xl text-red-700 hover:text-3xl"></FaTrashAlt>
                                        </button>
                                    </td>
                                </tr>)
                            }


                        </tbody>
                    </table>
                </div>

            </div>


        </div>
    );
};

export default ManageItems;