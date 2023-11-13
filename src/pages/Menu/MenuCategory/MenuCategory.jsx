import { Link } from "react-router-dom";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import Cover from "../../Shared/Cover/Cover";

const MenuCategory = ({ items, title, img }) => {
    return (
        <div>
            {title && <Cover
                img={img}
                title={title}
            ></Cover>}
            <div className="grid md:grid-cols-2 gap-4 p-2 ">
                {
                    items?.map(item => <MenuItem
                        item={item}
                        key={item._id}
                    ></MenuItem>)

                }
            </div>
            <Link to={`/order/${title}`} className="flex justify-center my-4">
                <button className=" bg-white  border-b-4 border-black px-4 py-2 rounded-lg hover:bg-black hover:bg-opacity-70 hover:text-white mt-2 ">Order Your Favorite Food</button>
            </Link>
        </div>
    );
};

export default MenuCategory;