import { FaTrashAlt } from "react-icons/fa";
import useCart from "../../../hooks/useCart";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { Link } from "react-router-dom";

const Cart = () => {
    const [cart ,refetch] = useCart();
    const totalPrice = cart.reduce((total, item) => total + item.price, 0)
    const axiosSecure = useAxiosSecure()

    const handleDelete = id => {
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

                axiosSecure.delete(`/carts/${id}`)
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
        <div className="my-10">
            <div className="flex justify-evenly mb-9">
                <h2 className="text-2xl md:text-4xl lg:text-6xl"> Items : {cart.length}</h2>
                <h2 className="text-2xl md:text-3xl lg:text-4xl"> Total Price : {totalPrice}</h2>
            { cart.length? <Link to="/dashboard/payment">
                <button className="bg-[#E8E8E8] text-[#BB8506] hover:bg-[#BB8506] hover:text-white px-4 py-2 rounded-lg font-semibold border-b-4 border-[#BB8506] my-2">Pay</button>
            </Link>:
            <button disabled className="btn">Pay</button>
        }
               
            </div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className="bg-[#d1a054] text-lg md:text-xl text-white">
                            <th> #</th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>action</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            cart.map((item, index) => <tr key={item._id}>

                                <td>
                                    <div className="flex items-center gap-3">

                                        {index + 1}
                                    </div>
                                </td>
                                <td>
                                    <div className="w-20  h-12">
                                        <img className="rounded-3xl" src={item.image} alt="Avatar Tailwind CSS Component" />
                                    </div>
                                </td>
                                <td><h4 className="text-xl font-bold">{item.name}</h4></td>
                                <th>
                                    <p>$ {item.price}</p>
                                </th>
                                <th>
                                    <button
                                        onClick={() => handleDelete(item._id)}
                                        className=""><FaTrashAlt className="text-2xl text-[#BB8506] hover:text-3xl"></FaTrashAlt></button>
                                </th>
                            </tr>)
                        }


                    </tbody>


                </table>
            </div>
        </div>
    );
};

export default Cart;