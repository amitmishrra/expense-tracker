import './style.css'
import Buttons from './buttons'
import React, { useRef, useState } from 'react';


const logout = () => {
    localStorage.clear();
    window.location.reload(false);
}

const Account = () => {
    return (
        <>
            <div className=" flex flex-col md:flex-row pt-26 w-[100vw] ">
                <div className=" text-white flex flex-col justify-around md:mt-[10vh] mt-0 items-center right-0 md:w-[50vw] md:h-[90vh] h-[90vh]  ">
                    <div className="accInfo text-2xl flex flex-col justify-around items-center md:mt-11 mt-[10vh] md:rounded-[20px] rounded-[20px] p-3 md:h-[86%] h-[70%] md:w-[30vw] w-[70%]  ">
                        <img className=" rounded-[50%]  md:w-[180px] w-[150px] md:h-[180px] h-[150px] md:mt-8 mt-[5vh] bg-white" src="/" alt="" />
                        <p>Name </p>
                        <p>Email</p>
                        <p>Phone number</p>
                        <p>example@upi</p>
                        <button onClick={logout}>Logout</button>
                        <img src="" alt="" />
                    </div>
                </div>
                <div className="  flex flex-col items-center justify-around md:mt-[18vh] md:py-[50px] py-[80px] left-0 md:w-[50vw] md:h-[80vh] h-[90vh]  ">
                    <img className="md:w-[300px] w-[250px] md:h-[300px] h-[250px] bg-white" src="https://upiqr.in/api/qr?name=Amit&vpa=mishra4amit4@ybl" alt="" />
                    <p id="upi" className="upi text-white text-2xl " value="Example123@upi" >Example123@upi</p>

                    <Buttons />
                </div>
            </div>
        </>
    )
}

export default Account;