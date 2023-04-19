import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Login = () => {
    const { register, handleSubmit } = useForm();
    const [loginData, setLoginData] = useState("");

    return (
        <div className="max-w-[385px] min-h-[480px] mx-auto flex justify-center items-center my-12">
            <div>
                <form
                    onSubmit={handleSubmit((data) =>
                        setLoginData(JSON.stringify(loginData))
                    )}
                >
                    <h2 className="text-4xl font-medium text-center mb-5">
                        Login
                    </h2>
                    <div className="w-full my-3">
                        <label htmlFor="loginEmail">Email Address</label>
                        <input
                            type="email"
                            {...register("email")}
                            id="loginEmail"
                            className="input input-bordered w-full"
                        />
                    </div>
                    <div className="w-full my-3">
                        <label htmlFor="loginPassword">Your Password</label>
                        <input
                            type="password"
                            {...register("password")}
                            id="loginPassword"
                            className="input input-bordered w-full"
                        />
                    </div>
                    <Link to="/passwordReset" className="text-sm mb-5 block">
                        Forgot Password?
                    </Link>
                    <input
                        type="submit"
                        className="btn btn-accent text-white w-full"
                        value="Login"
                    />
                </form>
                <div className="text-center mt-2">
                    <p className="text-sm">
                        New to Doctors Portal?{" "}
                        <Link className="text-primary">Sign Up Here</Link>
                    </p>
                </div>
                <div className="flex flex-col w-full border-opacity-50">
                    <div className="divider text-accent font-medium">OR</div>
                </div>
                <div className="text-center">
                    <button className="btn btn-outline w-full">
                        CONTINUE WITH GOOGLE
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Login;
