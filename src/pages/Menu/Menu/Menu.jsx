import { Helmet } from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover';
import menuBanner from '../../../assets/menu/banner3.jpg'
import menuSoup from '../../../assets/menu/soup-bg.jpg'
import menuDessert from '../../../assets/menu/dessert-bg.jpeg'
import menuPizza from '../../../assets/menu/pizza-bg.jpg'
import menuSalad from '../../../assets/menu/salad-bg.jpg'
import useMenu from '../../../hooks/useMenu';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import MenuCategory from '../MenuCategory/MenuCategory';
const Menu = () => {
    const [menu] = useMenu();
    const dessert = menu.filter(item => item.category === 'dessert')
    const soup = menu.filter(item => item.category === 'soup')
    const salad = menu.filter(item => item.category === 'salad')
    const pizza = menu.filter(item => item.category === 'pizza')
    const offered = menu.filter(item => item.category === 'offered')
    return (

        <div>
            <Helmet>
                <title>Boss Chef | Menu</title>
                <link rel="canonical" href="https://www.tacobell.com/" />
            </Helmet>
            <Cover
                img={menuBanner}
                title={"our menu"}
            ></Cover>
            <div className='max-w-7xl mx-auto'>
                <SectionTitle
                    subHeading="Don't Miss"
                    heading={"today's offer"}
                ></SectionTitle>
                <MenuCategory
                    items={offered}>
                </MenuCategory>
                <Cover
                    img={menuDessert}
                    title={"dessert"}
                ></Cover>
                <MenuCategory
                    items={dessert}
                ></MenuCategory>
                <Cover
                    img={menuPizza}
                    title={"Pizza"}
                ></Cover>
                <MenuCategory
                    items={pizza}
                ></MenuCategory>
                <Cover
                    img={menuSalad}
                    title={"Salad"}
                ></Cover>
                <MenuCategory
                    items={salad}
                ></MenuCategory>
                <Cover
                    img={menuSoup}
                    title={"soup"}
                ></Cover>
                <MenuCategory
                    items={soup}
                ></MenuCategory>
            </div>

        </div>
    );
};

export default Menu;