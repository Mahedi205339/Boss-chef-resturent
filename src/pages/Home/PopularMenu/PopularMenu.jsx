import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import useMenu from "../../../hooks/useMenu";



const PopularMenu = () => {

    const [menu] = useMenu();
    const popular = menu.filter(item => item.category === 'popular')


    // const [menu, setMenu] = useState([])
    // useEffect(() => {
    //     fetch('menu.json')
    //         .then(res => res.json())
    //         .then(data => {
    //             const popularItems = data.filter(item => item.category === 'popular')
    //             setMenu(popularItems)


    //         })
    // }, [])


    return (
        <section>
            <SectionTitle
                heading={"From Our Menu"}
                subHeading={"from our menu"}
            ></SectionTitle>
            <div className="grid md:grid-cols-2 gap-4 p-2">
                {
                    popular?.map(item => <MenuItem
                        item={item}
                        key={item._id}
                    ></MenuItem>)

                }
            </div>
            <div className="text-center my-4 ">
                <button className=" bg-black bg-opacity-10 border-b-4 border-black px-4 py-2 rounded-lg hover:bg-black hover:bg-opacity-60 hover:text-white mt-2">View Full Menu</button>
            </div>


        </section>
    );
};

export default PopularMenu;