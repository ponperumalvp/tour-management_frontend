import React, { useState } from "react";
import loginImg from "../assets/images/login.png";
import { Link } from "react-router-dom";
import user from "../assets/images/user.png";

const Login = () => {
  const [credentials, setCredentials] = useState({
    email: undefined,
    password: undefined,
  });

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div className="container">
        <div>
          <div className="flex mt-28 w-[100%] ">
            <div className="w-[60%]  flex justify-end   ">
              <img src={loginImg} alt="" className="w-[60%]  object-contain" />
            </div>
            {/* login form */}
            <div className="bg-[var(--secondary-color)] w-[50%] p-[50px] mr-20  rounded-xl shadow-md relative">
              <div className="flex flex-col  justify-center items-center">
                <div
                  className=" w-[80px] h-[80px] absolute top-[-9%] left-[50%]  
                translate-x-[-50%] translate-y-[-9%]"
                >
                  <img src={user} alt="" className="w-[100%]" />
                </div>
                <h2 className="font-normal">Login</h2>
              </div>
              <form
                className="flex flex-col items-center"
                onSubmit={handleClick}
              >
                <div className="w-[100%] my-3 ">
                  <input
                    type="email"
                    placeholder="Email"
                    required
                    id="email"
                    onChange={handleChange}
                    className="w-[100%] h-10 focus:outline-none rounded-lg bg-[#f1eded] "
                  />
                </div>
                <div className="w-[100%] my-3">
                  <input
                    type="password"
                    placeholder="Password"
                    required
                    id="password"
                    onChange={handleChange}
                    className="w-[100%] h-10 focus:outline-none rounded-lg bg-[#f1eded] "
                  />
                </div>
                <div className=" w-40 h-10 text-lg  bg-[#f1eded] text-orange-300 font-bold  text-center p-2 my-3 rounded-lg">
                  <button>Login</button>
                </div>
              </form>
              <p className="text-center my-2">
                Don't have account?{" "}
                <Link to="/register" className="no-underline ml-2">
                  Create
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
