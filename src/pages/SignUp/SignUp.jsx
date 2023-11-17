//import { LoadCanvasTemplate } from 'react-simple-captcha';
import './signUp.css'
import { Link, useNavigate } from 'react-router-dom';
import logImg from '../../assets/others/authentication2.png'
import { useForm } from 'react-hook-form';
import { Helmet } from 'react-helmet-async';
import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import Swal from 'sweetalert2';
import useAxiosPublic from '../../hooks/useAxiosPublic';
import SocialLogin from '../../components/SocialLogin/SocialLogin';

const SignUp = () => {
    const axiosPublic = useAxiosPublic()
    const {
        register, handleSubmit, reset, formState: { errors },
    } = useForm()
    const { createUser, updateUserProfile } = useContext(AuthContext);
    const navigate = useNavigate();

    const onSubmit = (data) => {
        console.log(data.name, data.PhotoURL)
        createUser(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser)
                updateUserProfile(data.name, data.PhotoURL)
                    .then(() => {
                        //create user entry in the database 
                        const userInfo = {
                            name: data.name,
                            email: data.email
                        }
                        axiosPublic.post('users', userInfo)
                            .then(res => {
                                if (res.data.insertedId) {
                                    console.log('user added to the database')
                                }
                            })
                        reset()
                        Swal.fire({
                            position: "center",
                            icon: "success",
                            title: "Successfully Signed in",
                            showConfirmButton: false,
                            timer: 1500
                        });
                        navigate('/')
                    })
                    .catch(error => console.log(error))
            })
    }

    return (
        <div className="sign-back hero min-h-screen ">
            <Helmet>
                <title>Boss Chef | SignUp</title>
                <link rel="canonical" href="https://www.tacobell.com/" />
            </Helmet>
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
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input  {...register("PhotoURL", { required: true })} type="text" placeholder="Photo URL"
                                className="input input-bordered" />
                            {errors.name && <span className='text-red-700 font-bold'>Email is required</span>}
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
                            <input  {...register("password", {
                                required: true,
                                minLength: 8,
                                maxLength: 20,
                                pattern: /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])/
                            })} type="text" placeholder="password"
                                name="password"
                                className="input input-bordered" />

                            {errors.name && <span className='text-red-700 font-bold'>Password is required</span>}
                            {errors.password?.type === 'minLength' && <p className='text-red-600'> Password must be 6 character</p>
                            }
                            {errors.password?.type === 'maxLength' && <p className='text-red-600'> Password must be less than 20 character</p>
                            }
                            {errors.password?.type === 'pattern' && <p className='text-red-600'> Password must have one uppercase , one lowercase and one number</p>
                            }
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
                            <input className="w-full bg-[#d1a054] hover:bg-[#9c6535] py-2 rounded-lg text-white" type="submit" value="SignUp" />


                        </div>
                    </form>
                    <p className='text-center'><small className='text-[#d1a054]'>Already Have an account? <Link to="/login"><span className='font-bold'>Login</span></Link></small></p>
                    <SocialLogin></SocialLogin>
                </div>
            </div>
        </div>
    );
};

export default SignUp;