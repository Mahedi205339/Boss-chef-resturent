import ChefRecItems from "../../Home/ChefRecItems/ChefRecItems";


const OrderTab = ({items}) => {
    return (
        <div className='grid grid-col1 md:grid-cols-2 lg:grid-cols-3 my-10 md:my-14 lg:my-20'>
                    {
                    items?.map(item => <ChefRecItems
                        item={item}
                        key={item._id}
                    ></ChefRecItems>)

                }
                </div>
    );
};

export default OrderTab;