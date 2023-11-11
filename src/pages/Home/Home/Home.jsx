import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Featured from "../Featured/Featured";
import PopularMenu from "../PopularMenu/PopularMenu";
import TextBanner from "../TextBanner/TextBanner";
import ChefMenu from "./ChefMenu/ChefMenu";


const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <div className="max-w-7xl mx-auto">
        <Category></Category>
        <TextBanner></TextBanner>
        <PopularMenu></PopularMenu>
        <ChefMenu></ChefMenu>
        <Featured></Featured>
      </div>


    </div>
  );
};

export default Home;