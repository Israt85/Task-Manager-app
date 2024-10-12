import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Provider/AuthProvider';

const Login = () => {
    const {signInUser}=useContext(AuthContext)
    const navigate= useNavigate()
    const handleLogin = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email,password);
      
        if (!email, !password) {
          toast.error("Email or password does not match match");
        } else {
            signInUser(email, password)
            .then(result => {
              console.log(result.user);
              navigate(location?.state ? location.state : "/");
            })
            .catch(err => {
              console.log(err);
              toast.error("Login failed"); 
            });
        }
      };
     
    return (
        <div>

            <div className="hero h-auto ">
                <div className="hero-content flex-col ">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login</h1>
                        
                    </div>
                    <div className="card flex-shrink-0 w-60 md:w-full max-w-sm shadow-2xl bg-base-100">
                        <form
                         onSubmit={handleLogin}

                         className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div><h2>New to this Website? please <Link className="font-bold text-blue-600" to="/signup">Signup</Link> </h2></div>
                            <div className="form-control mt-6">
                                <button className="btn btn-error">Login</button>
                               
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;