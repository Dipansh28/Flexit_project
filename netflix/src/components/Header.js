import axios from 'axios';
import React from 'react';
import { IoIosArrowDropdown } from "react-icons/io";
import {useDispatch, useSelector} from "react-redux";
import { setUser } from '../redux/userSlice';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { setToggle } from '../redux/movieSlice';

const Header = () => {
    const user = useSelector((state)=>state.user.user);
    const toggel = useSelector((state)=> state.movie.toggel)
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const logoutHandler = async () => {
        try {
            const res = await axios.get(`http://localhost:3000/logout`);
            if(res.data.success){
                toast.success(res.data.message);
            }
            dispatch(setUser(null));
        } catch (error) {
            console.log(error);
        }
    }
     
    const toggleHandler = () => {
        dispatch(setToggle());
    }

    return (
        <div className="absolute z-10 flex w-[100vw] items-center justify-between px-6 bg-gradient-to-b from-black">
            <img className="w-56" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/799px-Netflix_2015_logo.svg.png" alt="netflix-logo"/>
            {
                user && (
            <div className="flex items-center">
                < IoIosArrowDropdown size="24px" color="white"/>
                <h1 className="text-lg font-medium text-white">{user.fullName}</h1> 
                 <div className="ml-4">
                   <button onClick={logoutHandler} className="bg-red-800 text-white px-4 py-2">Logout</button>
                   <button onClick={toggleHandler} className="bg-red-800 text-white px-4 py-2 ml-2">{toggel ? "Home" : "Search Movies"}</button>
                 </div>
            </div>
                )
            }    
        
        </div>
    )
}

export default Header