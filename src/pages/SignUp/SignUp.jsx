//import { LoadCanvasTemplate } from 'react-simple-captcha';
import './signUp.css'
import { Link } from 'react-router-dom';
import logImg from '../../assets/others/authentication2.png'
import { useForm } from 'react-hook-form';

const SignUp = () => {
    const {
        register, handleSubmit, formState: { errors },
    } = useForm()

    const onSubmit = (data) => {
        console.log(data)
    }

    return (
        <div className="sign-back hero min-h-screen bg-base-200">
            <div className="hero-content flex flex-col md:flex-row">
                <div className="text-center md:w-1/2 lg:text-left">
                    <img src={logImg} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm lg:w-1/2">
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        <div>
                            <h2 className='text-center text-2xl md:text-4xl lg:text5xl font-bold text-[#d1a054]'>SignUp Now</h2>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input {...register("name", { required: true })}
                                type="text" placeholder="name"
                                name="name"
                                className="input input-bordered"

                            />
                            {errors.name && <span className='text-red-700 font-bold'>Name is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input  {...register("email", { required: true })} type="email" placeholder="email"
                                name="email"
                                className="input input-bordered" />
                            {errors.name && <span className='text-red-700 font-bold'>Email is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input  {...register("password", { required: true, minLength: 8, maxLength: 20 })} type="password" placeholder="password"
                                name="password"
                                className="input input-bordered" />
                            {errors.name && <span className='text-red-700 font-bold'>Password is required</span>}
                        </div>

                        {/* <div className="form-control">
                            <label className="label">
                                <LoadCanvasTemplate></LoadCanvasTemplate>
                            </label>
                            <input type="text" placeholder="type the text above"
                                name="captcha"
                                className="input input-bordered" />
                            <button className='btn btn-xs btn-outline  mt-3'>Validate</button>
                        </div> */}

                        <div className="form-control mt-6">
                            <input className="w-full bg-[#d1a054] hover:bg-[#9c6535] py-2 rounded-lg text-white" type="submit" />


                        </div>
                    </form>
                    <p className='text-center'><small className='text-[#d1a054]'>Already Have an account? <Link to="/login"><span className='font-bold'>Login</span></Link></small></p>
                </div>
            </div>
        </div>
    );
};

export default SignUp;