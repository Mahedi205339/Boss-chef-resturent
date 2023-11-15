import './login.css'
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import logImg from '../../assets/others/authentication1.png'
import { useContext, useEffect, useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import { Helmet } from 'react-helmet-async';
import Swal from 'sweetalert2';
const Login = () => {
    const captchaRef = useRef(null)
    const [disabled, setDisabled] = useState(true);
    const { signIn } = useContext(AuthContext)
    const navigate = useNavigate();
    const location = useLocation()

    const from = location.state?.from?.pathname || "/";


    useEffect(() => {
        loadCaptchaEnginge(6)
    }, [])
    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Successfully Logged in",
                    showConfirmButton: false,
                    timer: 1500
                });
                navigate(from, { replace: true })
            })
            .catch(error => console.log(error))
    }

    const handleValidateCaptcha = () => {
        const userCaptchaValue = captchaRef.current.value;
        if (validateCaptcha(userCaptchaValue)) {
            setDisabled(false)
        } else {
            setDisabled(true)
        }


    }



    return (
        <div className="login-back hero min-h-screen bg-base-200">
            <Helmet>
                <title>Boss Chef | Login</title>
                <link rel="canonical" href="https://www.tacobell.com/" />
            </Helmet>
            <div className="hero-content flex flex-col md:flex-row">
                <div className="text-center md:w-1/2 lg:text-left">
                    <img src={logImg} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm lg:w-1/2">
                    <form onSubmit={handleLogin} className="card-body">
                        <div>
                            <h2 className='text-center text-2xl md:text-4xl lg:text5xl font-bold text-[#d1a054]'>Login</h2>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email"
                                name="email"
                                className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password"
                                name="password"
                                className="input input-bordered" required />

                        </div>

                        <div className="form-control">
                            <label className="label">
                                <LoadCanvasTemplate></LoadCanvasTemplate>
                            </label>
                            <input ref={captchaRef} type="text" placeholder="type the text above"
                                name="captcha"
                                className="input input-bordered" />
                            <button onBlur={handleValidateCaptcha} className='btn btn-xs btn-outline  mt-3'>Validate</button>

                        </div>
                        <div className="form-control mt-6">
                            <input disabled={disabled} className="w-full bg-[#d1a054] hover:bg-[#9c6535] py-2 rounded-lg text-white" type="submit" />


                        </div>
                    </form>
                    <p className='text-center'><small className='text-[#d1a054]'>New Here? <Link to="/signUp"><span className='font-bold'>Create an Account</span></Link></small></p>
                </div>
            </div>
        </div>
    );
};

export default Login;