// eslint-disable-next-line no-unused-vars
import React from 'react';
import fondo from '../assets/fondo3.png';
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const navigate = useNavigate();

    const handleDashboardClick = () => {
        navigate("/Dashboard");

    }

    return (
        <div className='text-white h-[100vh] flex items-center justify-center bg-cover' style={{ backgroundImage: `url(${fondo})` }}>
            
            <div className='bg-slate-800 border border-slate-600 rounded-md p-8 shadow-lg backdrop-filter backdrop-blur-lg bg-opacity-20 relative'>
               <h1 className='text-4x1 font-bold text-center mb-6'>Login</h1>
                <form action=''>
                    <div className='relative my-4'>
                        <input type='text' className='block w-72 py-2.5 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white focus:border-blue-600 peer' placeholder=''/>
                        <label htmlFor='' className='absolute text-sm duration-300 transform -translate scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-red-50 peer-focus:dark:text-blue-600 peer-placeholder-shown:scale-100 peer-focus:scale-75 peer-focus:-translate-y-6'> Username</label>
                    </div>
                    <div className='relative my-4'>
                        <input type='password' className='block w-72 py-2.5 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white focus:border-blue-600 peer' placeholder=''/>
                        <label htmlFor='' className='absolute text-sm duration-300 transform -translate scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-50 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-focus:scale-75 peer-focus:-translate-y-6'>Password</label>
                    </div>
                    <button onClick={handleDashboardClick} className='w-full mb-6 text-[18px] bg-blue-500 py-2 hover:bg-blue-600 transition-colors duration-300'>Login</button>
                </form>
            </div>
        </div>
    );
};

export default Login;
 