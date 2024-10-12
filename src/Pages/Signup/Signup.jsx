import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Provider/AuthProvider';

const Signup = () => {
    const {createUser, userProfile}= useContext(AuthContext)
    const navigate= useNavigate()
    const handleSignUp = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photo = form.photo.value;
    
      
      
        createUser(email, password)
            .then(result => {
                console.log(result.user);
                navigate(location?.state ? location.state : "/")
    
                userProfile(name, photo)
                    .then(result => {
                        console.log(result.user);
                        
                        return;
                    })
                    .catch(err => {
                        console.log(err);
                    });
    
            })
            .catch(err => {
                console.error(err);
            });
    };
    return (
        <div>
        <div className="hero h-auto bg-base-200">
            <div className="hero-content flex-col ">
                <div className="text-center lg:text-left">
                    <h1 className="text-3xl my-2 font-bold">SignUp</h1>

                </div>
                <div className="card w-60 md:w-96 shadow-2xl bg-base-100">
                    <form 
                    
                    onSubmit={handleSignUp}

                    className="card-body w-full">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Full Name</span>
                            </label>
                            <input type="text" name="name" placeholder="Your name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo Url</span>
                            </label>
                            <input type="text" name="photo" placeholder="Your photo url" className="input input-bordered" required />
                        </div>
                        
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                           
                        </div>
                        <h2>Already have an account? please <Link className="font-bold text-blue-600" to="/login">Login</Link> </h2>
                        <div className="form-control mt-6">
                            <button className="btn btn-error">Sign Up</button>
                            
                        </div>
                    </form>
                </div>
            </div>
        </div>

    </div>
    );
};

export default Signup;