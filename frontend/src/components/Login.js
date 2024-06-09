import React, { useState } from "react";
import Header from "./Header";
import axios from "axios";
import { API_END_POINT } from "../utils/constant";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setLoading, setUser } from "../redux/userSlice";

const Login = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [fullName, setFullName] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const navigate = useNavigate("");
  const dispatch = useDispatch();

  const isLoading = useSelector((state) => state.user.isLoading);

  const loginHandler = () => {
    setIsLogin(!isLogin);
  };
  const getInputData = async (e) => {
    e.preventDefault();
    dispatch(setLoading(true));
    if (isLogin) {
      //login
      const user = { email, password };
      try {
        const res = await axios.post(`${API_END_POINT}/login`, user, {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        });
        
        if (res.data.success) {
          toast.success(res.data.message);
        }
        dispatch(setUser(res.data.user));
        navigate("/browse");
      } catch (error) {
        toast.error(error.response.data.message);
        console.log(error);
      } finally {
        dispatch(setLoading(false));
      }
    } else {
      //register
      dispatch(setLoading(true));
      const user = { fullName, email, password };
      try {
        const res = await axios.post(`${API_END_POINT}/register`, user, {
          Headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        });
        if (res.data.success) {
          toast.success(res.data.message);
        }
        setIsLogin(true);
      } catch (error) {
        toast.error(error.response.data.message);
        console.log(error);
      } finally {
        dispatch(setLoading(false));
      }
    }
    setFullName("");
    setemail("");
    setpassword("");
  };

  return (
    <div className="relative h-screen overflow-hidden">
      <Header />
      <div className="absolute inset-0 flex items-center justify-center">
        <img
          className="w-full h-full object-cover"
          src="https://help.nflxext.com/0af6ce3e-b27a-4722-a5f0-e32af4df3045_what_is_netflix_5_en.png"
          alt="banner"
        />
      </div>

      <form
        onSubmit={getInputData}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[300px] p-8 bg-black bg-opacity-80 rounded-md z-50"
      >
        <h1 className="text-3xl text-white font-bold mb-5">
          {isLogin ? "Login" : "Sign Up"}
        </h1>
        {!isLogin && (
          <input
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            type="text"
            placeholder="Fullname"
            className="outline-none p-3 my-2 rounded-sm bg-gray-800 text-white"
          />
        )}
        <input
          value={email}
          onChange={(e) => setemail(e.target.value)}
          type="email"
          placeholder="Email"
          className="outline-none p-3 my-2 rounded-sm bg-gray-800 text-white"
        />
        <input
          value={password}
          onChange={(e) => setpassword(e.target.value)}
          type="password"
          placeholder="Password"
          className="outline-none p-3 my-2 rounded-sm bg-gray-800 text-white"
        />
        <button
          type="submit"
          className="bg-red-600 mt-6 p-3 text-white rounded-sm font-medium"
        >{`${isLoading ? "loading..." : isLogin ? "Login" : "Signup"}`}</button>
        <p className="text-white mt-2">
          {isLogin ? "New to Netflix?" : "Already have an account?"}{" "}
          <span
            onClick={loginHandler}
            className="ml-1 text-blue-900 font-medium cursor-pointer"
          >
            {isLogin ? "Sign Up" : "Login"}
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;
