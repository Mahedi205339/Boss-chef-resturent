import { Parallax } from 'react-parallax';

const Cover = ({ img, title }) => {
    return (
        <Parallax
            blur={{ min: -15, max: 15 }}
            bgImage={img}
            bgImageAlt="the Menu"
            strength={-200}
            className='h-[600px] my-6'
        >
            <div className="hero h-[600px]">
                <div className="hero-overlay h-3/6 w-9/12 mx-auto"> </div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md ">
                        <h1 className="mb-5 text-5xl font-bold uppercase ">{title}</h1>
                        <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                </div>

            </div>
            <div style={{ height: '200px' }} />
        </Parallax>

    );
};

export default Cover;