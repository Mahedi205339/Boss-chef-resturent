import img from '../../../assets/home/chef-service.jpg'

const TextBanner = () => {
    return (
        <div className='relative max-w-6xl mx-auto my-9'>
            <img className='h-[60vh] lg:h-auto lg:w-auto' src={img} alt="" />
            <div className='absolute max-w-4xl bg-white bg-opacity-60 md:bg-opacity-90 top-20 md:top-1/4 lg:top-1/3 lg:ml-32 text-center text-black p-1 lg:p-10'>
                <h1 className='text-2xl'>
                    BOSS CHEF
                </h1>
                <p className='mt-5 '>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo.
                </p>
            </div>

        </div>
    );
};

export default TextBanner;