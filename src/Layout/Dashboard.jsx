import { FaCalendar, FaEnvelope, FaHome, FaList, FaShoppingCart } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import { MdAddReaction, MdMenuBook } from "react-icons/md";
import useCart from "../hooks/useCart";

const Dashboard = () => {
    const [cart] = useCart()
    const dasboardLinks = <>
        <li className="flex flex-row items-center">
            <NavLink to="/dashboard/useHome">
                <FaHome></FaHome>
                User Home</NavLink>
        </li>


        <li className="menu menu-horizontal gap-3" >
            <NavLink to="/dashboard/cart">
                <FaShoppingCart></FaShoppingCart>
                My Cart({cart.length})</NavLink>
        </li>

        <li>
            <NavLink to="/dashboard/review">
                <MdAddReaction />
                Add Review</NavLink>

        </li>




        <li>
            <NavLink to="/dashboard/reservation">
                <FaCalendar></FaCalendar>
                Reservation</NavLink>
        </li>


        <li>
            <NavLink to="/dashboard/bookings">
                <FaList></FaList>
                My Bookings</NavLink>
        </li>
        {/* shared Navlinks  */}
        <div className="divider"></div>

        <li>
            <NavLink to="/">
                <FaHome></FaHome>
                Home</NavLink>
        </li>
        <li>
            <NavLink to="/order/salad">
                <MdMenuBook />
                Menu</NavLink>
        </li>
        <li>
            <NavLink to="/order/contact">
                <FaEnvelope />
                Contact
            </NavLink>
        </li>


    </>
    return (
        <div className="drawer">
            <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col">
                {/* Navbar */}
                <div className="w-full navbar bg-[#D1A054]">
                    <div className="flex-none lg:hidden">
                        <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                        </label>
                    </div>
                    <div className=" hidden lg:block">
                        <ul className="menu menu-horizontal flex items-center gap-3">
                            {/* Navbar menu content here */}

                            {dasboardLinks}
                        </ul>
                    </div>
                </div>
                {/* Page content here */}
                <Outlet></Outlet>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 min-h-full bg-base-200">
                    {/* Sidebar content here */}
                    {dasboardLinks}
                </ul>
            </div>
        </div>
    );
};

export default Dashboard;






