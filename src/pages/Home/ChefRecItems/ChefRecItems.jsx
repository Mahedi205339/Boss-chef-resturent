import Swal from "sweetalert2";
import useAuth from "../../../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useCart from "../../../hooks/useCart";


const ChefRecItems = ({ item }) => {
    const axiosSecure = useAxiosSecure()
    const navigate = useNavigate()
    const location = useLocation()
    const { user } = useAuth()
    const [, refetch] = useCart()
    const { name, image, recipe, price, _id } = item
    const handleAddToCart = () => {
        if (user && user.email) {
            //send cart item to the database
            const cartItem = {
                menuId: _id,
                email: user.email,
                name,
                image,
                price
            }
            axiosSecure.post('/carts', cartItem)
                .then(res => {
                    console.log(res.data)
                    if (res.data.insertedId) {
                        Swal.fire({
                            position: "center",
                            icon: "success",
                            title: `${name} added to your cart`,
                            showConfirmButton: false,
                            timer: 2000
                        });
                        //refetch cart 
                        refetch()
                    }
                })

        } else {
            Swal.fire({
                title: "You are not logged in",
                text: "Please login to add to the cart",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#30d67d",
                cancelButtonColor: "#d63030",
                confirmButtonText: "Login"
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: { from: location } })
                }
            });
        }
    }




    return (
        <section>

            <div className="card  bg-base-100 ">
                <figure><img src={image} alt="Shoes" /></figure>
                <div className="card-body px-10">
                    <h2 className="card-title">{name}</h2>
                    <p>{recipe}</p>
                    <p className="font-bold absolute mr-4 mt-5 top-0 right-0 text-yellow-600 bg-black px-2 py-1 rounded-tr-3xl rounded-bl-3xl"> $ {price}</p>
                    <div className="card-actions justify-center">
                        <button
                            onClick={() => handleAddToCart(item)}
                            className="bg-[#E8E8E8] text-[#BB8506] hover:bg-[#1F2937] px-4 py-2 rounded-lg font-semibold border-b-4 border-[#BB8506] my-2">Add to Cart</button>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default ChefRecItems;