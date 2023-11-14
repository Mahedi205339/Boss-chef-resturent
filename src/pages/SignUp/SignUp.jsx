import './signUp.css'
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import logImg from '../../assets/others/authentication1.png'
import { useContext, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
const Login = () => {
    const captchaRef = useRef(null)
    const [disabled, setDisabled] = useState(true);
    const { signIn } = useContext(AuthContext)
    useEffect(() => {
        loadCaptchaEnginge(6)
    }, [])
    const handleSingUp = event => {
        event.preventDefault();
        const form = event.target;
        
        const email = form.email.value;
        const name = form.name.value;
        const password = form.password.value;
        console.log(email, password)
        signIn(email , password)
        .then(result=>{
            const user = result.user;
            console.log(user)
        })
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
        <div className="signUp-back hero min-h-screen bg-base-200">
            <div className="hero-content flex flex-col md:flex-row">
                <div className="text-center md:w-1/2 lg:text-left">
                    <img src={logImg} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm lg:w-1/2">
                    <form onSubmit={handleSingUp} className="card-body">
                        <div>
                            <h2 className='text-center text-2xl md:text-4xl lg:text5xl font-bold text-[#d1a054]'>SignUp Now</h2>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="name"
                                name="name"
                                className="input input-bordered" required />
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
                            <button onClick={handleValidateCaptcha} className='btn btn-xs btn-outline  mt-3'>Validate</button>

                        </div>
                        <div className="form-control mt-6">
                            <input disabled={disabled} className="w-full bg-[#d1a054] hover:bg-[#9c6535] py-2 rounded-lg text-white" type="submit" />


                        </div>
                    </form>
                    <p className='text-center'><small className='text-[#d1a054]'>Already Have an account? <Link to="/login"><span className='font-bold'>Login</span></Link></small></p>
                </div>
            </div>
        </div>
    );
};

export default Login;