import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featuredImg from '../../../assets/home/featured.jpg'
import './Featured.css'
const Featured = () => {
    return (
        <div className="featured-background bg-fixed text-white py-5 md:py-10 lg:py-12">
            <SectionTitle
                subHeading={"Check it out"}
                heading={"Featured Item"}
            ></SectionTitle>
            <div className="md:flex justify-center items-center  bg-slate-500 bg-opacity-60 py-8 px-16">
                <div>
                    <img src={featuredImg} alt="" />
                </div>
                <div className="md:ml-10">
                    <p>
                        Nov ,20 ,2023
                    </p>
                    <p className="uppercase">
                        Where can I get some?
                    </p>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error ut sunt assumenda illo laudantium provident repellat commodi accusantium eius similique ea odio, eveniet nostrum sint, perspiciatis dolorum reprehenderit, cumque deserunt sed? Provident molestiae labore officia nihil iure tempora atque aliquid placeat distinctio, est sit eos delectus molestias, doloremque doloribus culpa!</p>

                    <button className=" bg-black bg-opacity-10 border-b-4 border-white px-4 py-2 rounded-lg hover:bg-black hover:bg-opacity-70 mt-2">Order Now</button>
                </div>

            </div>

        </div>
    );
};

export default Featured;