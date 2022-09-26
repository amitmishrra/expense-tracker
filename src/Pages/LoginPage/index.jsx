import './Style.css'
import { useEffect, useState } from "react";
import { NavLink } from 'react-router-dom';

let usersData = JSON.parse(localStorage.getItem("usersData")) || [];

const Login = ()=>{
    const [name, setName] = useState();
    const [mail, setMail] = useState();
    const [number, setNumber] = useState();

    const handleNameChange = (event)=>{
        setName(event.target.value)
    }
    const handleMailChange = (event)=>{
        setMail(event.target.value)
    }

    const handleNumberChange = (event)=>{
        setNumber(event.target.value)
    }

    const submit = ()=>{
        usersData.unshift({
            name : name,
            mail :mail,
            number : number
        });
        localStorage.setItem("usersData", JSON.stringify(usersData));

        setTimeout(()=>{
            window.location.reload()
        },100)
    }

    useEffect(()=>{
        console.log(usersData)
    },[usersData]);


    return (
    <>
    <div className=" pt-44  m-auto h-[85vh] flex flex-col justify-center items-center font-class">
        <form className="loginContainer w-[85%] md:w-1/2 bg-orange-700 h-[65vh] rounded-[20px] flex flex-col justify-around items-center font-class">
            <div className=" text-[25px] md:text-[30px] text-white ">
                Login
            </div>

            <div className="w-full flex justify-center items-center">
                <input type="text" onChange={handleNameChange} required placeholder='Full Name' className='loginInputs'/>
            </div>

            <div className="w-full flex justify-center items-center">
            <input type="mail" onChange={handleMailChange} required placeholder='Email' className='loginInputs'/>
            </div>

            <div className="w-full flex justify-center items-center">
            <input type="tel" onChange={handleNumberChange} required placeholder='Phone Number' className='loginInputs'/>
            </div>

            <div className="">
               
               <button type={"submit"} disabled={name && number && mail ? false : true} onClick={submit} className='submitButton p-1 '>Submit</button>
           
            </div>

        </form>
    </div>
    </>
    )
}

export default Login;