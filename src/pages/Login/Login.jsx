import './login.css'
import logImg from '../../assets/others/authentication1.png'
const Login = () => {
    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)

    }

    return (
        <div className="login-back hero min-h-screen bg-base-200">
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
                        <div className="form-control mt-6">
                            <input className="w-full bg-[#d1a054] hover:bg-[#9c6535] py-2 rounded-lg text-white" type="submit" />


                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;