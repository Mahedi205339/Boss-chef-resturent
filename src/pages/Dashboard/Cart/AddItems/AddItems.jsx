import { useForm } from "react-hook-form";
import SectionTitle from "../../../../components/SectionTitle/SectionTitle";
import { FaUtensils } from "react-icons/fa";
import useAxiosPublic from "../../../../hooks/useAxiosPublic";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`
//image upload to image bb and then get an url
const AddItems = () => {
    const axiosPublic = useAxiosPublic()
    const { register, handleSubmit } = useForm()
    const onSubmit = async (data) => {
        console.log(data)
        const imageFile = { image: data.image[0] }
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
        console.log(res.data)
    }

    return (
        <div>
            <SectionTitle
                subHeading={"What's New?"}
                heading={"add an item"}
            ></SectionTitle>
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>

                    {/* Recipe Name */}
                    <div className="form-control w-full my-6">
                        <label className="label">
                            <span className="label-text">Recipe Name*</span>
                        </label>
                        <input type="text"
                            {...register('name')}
                            placeholder="Recipe name" className="input input-bordered w-full " />

                    </div>
                    <div className="flex flex-col md:flex-row items-center gap-2">
                        {/* category */}
                        <div className="w-full">
                            <label className="label">
                                <span className="label-text"> Category*</span>
                            </label>
                            <select className="select select-bordered w-full " {...register("Category")}>
                                <option disabled selected >Select a category</option>
                                <option value="salad">Salad</option>
                                <option value="pizza">Pizza</option>
                                <option value="desert">Desert</option>
                                <option value="soup">Soup</option>
                                <option value="drinks">Drinks</option>
                            </select>
                        </div>
                        {/* Price  */}

                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text"> Price*</span>
                            </label>
                            <input type="number"
                                {...register('price', { required: true })}
                                placeholder="Price"
                                className="input input-bordered w-full " />
                        </div>
                    </div>
                    {/* input image from file */}
                    <div className="my-5">
                        <input  {...register('image', { required: true })} type="file" className="file-input w-full max-w-xs" />
                    </div>
                    {/* Recipe Details */}
                    <label className="label">
                        <span className="label-text"> Recipe Details*</span>
                    </label>
                    <textarea {...register('recipe', { required: true })} type="text
                    " placeholder="Recipe Details" className="input input-bordered input-lg w-full " />

                    <button className="flex items-center gap-2 bg-[#E8E8E8] text-[#BB8506] hover:bg-[#1F2937] px-4 py-2 rounded-lg font-semibold border-b-4 border-[#BB8506] my-6 mx-auto">
                        Add Items <FaUtensils></FaUtensils>
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddItems;