import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import useCart from "../../../hooks/useCart";
import useAuth from "../../../hooks/useAuth";
// import useAdmin from "../../../hooks/useAdmin";
const Navbar = () => {
    const { user, logout } = useAuth()
    // const[isAdmin]=useAdmin()
    const [cart] = useCart()
    const handleLogout = () => {
        logout()
            .then(() => { })
            .catch(error => console.log(error))

    }
    console.log(user?.photoURL)

    const navLinks = <>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/menu">Our Menu</Link></li>
        <li><Link to="/order/salad">Order Food</Link></li>
        <li>
            <Link to="/dashboard/cart">
                {/* <button className="btn"> */}
                <FaShoppingCart className="text-2xl"></FaShoppingCart>
                <div className="badge  badge-secondary ">+{cart.length}</div>
                {/* </button> */}
            </Link>
        </li>

        {
            user ? <>
                <button onClick={handleLogout} className=" py-1 px-2 rounded-lg bg-red-700 text-white"> Logout</button>
            </>

                :
                <li><Link to="/login">Login</Link></li>

        }
    </>

    return (
        <>
            <div className="navbar z-10 fixed bg-black bg-opacity-30 w-full lg:w-10/12 mx-auto text-white ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu text-black menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navLinks}
                        </ul>
                    </div>
                    <div className="flex flex-col items-center">
                        <h3 className="btn btn-ghost normal-case text-xl">Boss Chef</h3>
                        <h3 className="text-2xl font-base">RESTAURANT</h3>
                    </div>

                </div>
                <div className="navbar-center right-0 hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navLinks}
                    </ul>
                </div>
                <div className="navbar-end flex lg:flex-row gap-3">


                    <h3 className="text-2xl">{user?.displayName}</h3>
                    <img className="w-16 p-1 rounded-full" src={user?.photoURL} alt="" />
                </div>
            </div>
        </>
    );
};

export default Navbar;