import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import PopularMenu from "../PopularMenu/PopularMenu";
import TextBanner from "../TextBanner/TextBanner";


const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <div className="max-w-7xl mx-auto">
             <Category></Category>
           <TextBanner></TextBanner>
           <PopularMenu></PopularMenu>
           </div>
          

        </div>
    );
};

export default Home;