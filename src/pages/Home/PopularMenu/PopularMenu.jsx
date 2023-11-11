import { useEffect, useState, } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";



const PopularMenu = () => {
    const [menu, setMenu] = useState([])
 

    useEffect(() => {
        fetch('menu.json')
            .then(res => res.json())
            .then(data => {
                const popularItems = data.filter(item => item.category === 'popular')
                setMenu(popularItems)
                

            })
    }, [])
  

    return (
        <section>
            <SectionTitle
                heading={"From Our Menu"}
                subHeading={"from our menu"}
            ></SectionTitle>
            <div className="grid md:grid-cols-2 gap-4 p-2">
                {
                    menu?.map(item => <MenuItem
                        item={item}
                        key={item._id}
                    ></MenuItem>)

                }
            </div>


        </section>
    );
};

export default PopularMenu;