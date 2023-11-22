import useAuth from "../../../hooks/useAuth";

const UserHome = () => {
    const {user}=useAuth()
    return (
        <div>
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