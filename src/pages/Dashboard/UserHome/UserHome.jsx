import { Helmet } from "react-helmet-async";
import useAuth from "../../../hooks/useAuth";

const UserHome = () => {
    const {user}=useAuth()
    return (
        <div>
            <Helmet>
        <title>Boss Chef | User Home</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
             <h2 className="text-xl md:text-2xl lg:text-3xl">
                <span>Hi, Welcome </span>
                {
                    user?.displayName? user.displayName:'Back'
                }
            </h2>
        </div>
    );
};

export default UserHome;