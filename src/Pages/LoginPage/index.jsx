import './Style.css'
import {useState } from "react";


let usersData = JSON.parse(localStorage.getItem("usersData")) || [];

const Login = () => {
    const [name, setName] = useState();
    const [mail, setMail] = useState();
    const [number, setNumber] = useState();
    const [UPI, setUPI] = useState();
    const [avatar, setAvatar] = useState();
    const [avatarPath, setAvatarPath] = useState()

    const handleNameChange = (event) => {
        setName(event.target.value)
    }
    const handleMailChange = (event) => {
        setMail(event.target.value)
    }

    const handleNumberChange = (event) => {
        setNumber(event.target.value)
    }

    const handleUPIChange = (event) => {
        setUPI(event.target.value)
    }

    const submit = () => {
        usersData.unshift({
            name: name,
            mail: mail,
            number: number,
            UPI: UPI,
            avatar : avatarPath
        });
        localStorage.setItem("usersData", JSON.stringify(usersData));

        setTimeout(() => {
            window.location.reload()
        }, 100)
    }

    const imageStyle = {
        borderRadius: "50%",
        padding: "5px",
        borderWidth: "3px",
        borderColor: "white"
    }

    const selectFemale = () => {
        setAvatar("female");
        setAvatarPath("./assets/woman.png")
    }

    const selectMale = () => {
        setAvatar("male")
        setAvatarPath("./assets/man.png")
    }

    return (
        <>
            <div className=" pt-12  m-auto h-[95vh] flex flex-col justify-center items-center font-class">
            <div className="logo mb-8">
                ₹ExpenCy
                </div>

                <form className="loginContainer w-[85%] md:w-[40%] bg-orange-700 h-[85vh] rounded-[20px] flex flex-col justify-around items-center font-class">
                    <div className=" text-[25px] md:text-[30px] text-white ">
                        Login
                    </div>

                    <div className="w-full my-[10px] flex justify-center items-center">
                        <input type="text" onChange={handleNameChange} required placeholder='Full Name' className='loginInputs' />
                    </div>

                    <div className="w-full   flex justify-center items-center">
                        <input type="mail" onChange={handleMailChange} required placeholder='Email' className='loginInputs' />
                    </div>

                    <div className="w-full   flex justify-center items-center">
                        <input type="tel" onChange={handleNumberChange} required placeholder='Phone Number' className='loginInputs' />
                    </div>

                    <div className="w-full   flex justify-center items-center">
                        <input type="mail" onChange={handleUPIChange} required placeholder='UPI' className='loginInputs' />
                    </div>


                   
                        <div className='  text-center text-white text-[20px] md:text-[25px]'>
                            Select Your Avatar
                        </div>

                        <div className='flex mt-4 w-3/4 md:w-1/2 items-center justify-around'>
                            <div onClick={selectMale} style={avatar === "male" ? imageStyle : null} >
                                <img className='md:w-[100px] w-[80px]' src="./assets/man.png" alt="" />
                            </div>

                            <div style={avatar === "female" ? imageStyle : null} onClick={selectFemale} >
                                <img className='md:w-[100px] w-[80px]' src="./assets/woman.png" alt="" />
                            </div>

                        </div>




                    <div className="  ">

                        <button type={"submit"} disabled={name && number && mail && avatar && UPI ? false : true} onClick={submit} className='submitButton p-1 '>Submit</button>

                    </div>

                </form>
            </div>
        </>
    )
}

export default Login;