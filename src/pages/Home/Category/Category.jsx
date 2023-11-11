// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Pagination } from 'swiper/modules';

import slide1 from '../../../assets/home/slide1.jpg'
import slide2 from '../../../assets/home/slide2.jpg'
import slide3 from '../../../assets/home/slide3.jpg'
import slide4 from '../../../assets/home/slide4.jpg'
import slide5 from '../../../assets/home/slide5.jpg'
import SectionTitle from '../../../components/SectionTitle/SectionTitle';

const Category = () => {
    return (
        <section>
            <SectionTitle 
            subHeading={"From 11:00am to 10:00pm"}
            heading={"ORDER ONLINE"}
            >
            </SectionTitle>

            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                centeredSlides={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper mb-10 max-w-6xl mx-auto md:mb-24 lg:mb-24"
                breakpoints={{
                    0: {
                        slidesPerView: 1,
                        spaceBetween: 10,
                    },
                    480: {
                        slidesPerView: 2,
                        spaceBetween: 15,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },

                }}
            >

                <SwiperSlide className='w-96'>
                    <img className='w-full' src={slide1} alt="" />
                    <h3 className='text-4xl uppercase text-center text-white -mt-24'>Salads</h3>

                </SwiperSlide>
                <SwiperSlide>
                    <img className='w-full' src={slide2} alt="" />
                    <h3 className='text-4xl uppercase text-center text-white -mt-24'>Pizzas</h3>

                </SwiperSlide>
                <SwiperSlide>
                    <img className='w-full' src={slide3} alt="" />
                    <h3 className='text-4xl uppercase text-center text-white -mt-24'>Soups</h3>

                </SwiperSlide>
                <SwiperSlide>
                    <img className='w-full' src={slide4} alt="" />
                    <h3 className='text-4xl uppercase text-center text-white -mt-24'>Deserts</h3>

                </SwiperSlide>
                <SwiperSlide>
                    <img className='w-full' src={slide5} alt="" />
                    <h3 className='text-4xl uppercase text-center text-white -mt-24'>Salads</h3>

                </SwiperSlide>


            </Swiper>

        </section>
    );
};

export default Category;