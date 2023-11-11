

const ChefRecItems = ({ item }) => {

    const { name, image, recipe } = item
    return (
        <section>
           
            <div className="card bg-base-100 ">
            <figure><img src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions justify-center">
                    <button className="bg-[#E8E8E8] text-[#BB8506] hover:bg-[#1F2937] px-4 py-2 rounded-lg font-semibold my-2">Buy Now</button>
                </div>
            </div>
        </div>
        </section>
        
    );
};

export default ChefRecItems;