import { useEffect, useState } from "react";
import ChefRecItems from "../../ChefRecItems/ChefRecItems";
import SectionTitle from "../../../../components/SectionTitle/SectionTitle";

const ChefMenu = () => {
    const [chefRec, setChefRec] = useState([])
    useEffect(() => {
        fetch('menu.json')
            .then(res => res.json())
            .then(data => {

                const ChefRecItems = data.filter(item => item.category === 'offered')
                setChefRec(ChefRecItems)

            })
    }, [])

    return (
        <div>
            <SectionTitle
                heading={"CHEF RECOMMENDS"}
                subHeading={"Should Try"}
            >
            </SectionTitle>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 p-2">
                {
                    chefRec?.map(item => <ChefRecItems
                        item={item}
                        key={item._id}
                    ></ChefRecItems>)

                }
            </div>

        </div>
    );
};

export default ChefMenu;