import SectionTitle from "../../../../components/SectionTitle/SectionTitle";
import useMenu from "../../../../hooks/useMenu";

import { useEffect, useState } from "react";
import ChefRecItems from "../../ChefRecItems/ChefRecItems";

const ChefMenu = () => {

    const [menu] = useMenu()
    const [chefRec, setChefRec] = useState([])
    useEffect(() => {
        const chefRecommend = menu?.filter(item => item.category === 'offered')
        setChefRec(chefRecommend)
    }, [])


    return (
        <div>
            <SectionTitle
                heading={"CHEF RECOMMENDS"}
                subHeading={"Should Try"}
            >
            </SectionTitle>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 p-2">
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