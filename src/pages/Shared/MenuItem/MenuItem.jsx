
const MenuItem = ({ item }) => {
    const { name, image, price, recipe } = item
    
    return (
        <div className="flex space-x-2 my-7">
            <img className="w-32 h-28 rounded-b-full rounded-r-full" src={image} alt="" />
            <div>
                <h3 className="uppercase text-gray-500">{name}----------</h3>
                <p className="text-gray-400">{recipe}</p>
            </div>
            <p className="text-yellow-500 font-bold">${price}</p>
        </div>
    );
};

export default MenuItem;