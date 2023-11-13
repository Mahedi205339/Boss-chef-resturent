

const ChefRecItems = ({ item }) => {

    const { name, image, recipe, price } = item
    return (
        <section>

            <div className="card w-96 bg-base-100 ">
                <figure><img src={image} alt="Shoes" /></figure>
                <div className="card-body px-10">
                    <h2 className="card-title">{name}</h2>
                    <p>{recipe}</p>
                    <p className="font-bold absolute mr-4 mt-5 top-0 right-0 text-yellow-600 bg-black px-2 py-1 rounded-tr-3xl rounded-bl-3xl"> $ {price}</p>
                    <div className="card-actions justify-center">
                        <button className="bg-[#E8E8E8] text-[#BB8506] hover:bg-[#1F2937] px-4 py-2 rounded-lg font-semibold my-2">Buy Now</button>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default ChefRecItems;