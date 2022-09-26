import './Style.css'

const Login = ()=>{
    return (
    <>
    <div className="LoginContainer pt-44 w-[90%] m-auto h-[85vh] flex flex-col justify-center items-center font-class">
        <div className=" w-1/2 bg-orange-700 h-[65vh] rounded-[10px] flex flex-col justify-around items-center font-class">
            <div className=" text-[25px] md:text-[30px] text-white ">
                Login
            </div>

            <div className="">
                <input type="text" required placeholder='Full Name' className='loginInputs'/>
            </div>

            <div className="">
            <input type="mail" required placeholder='Email' className='loginInputs'/>
            </div>

            <div className="">
            <input type="tel" required placeholder='Phone Number' className='loginInputs'/>
            </div>

            <div className="">
                <button className='submitButton p-1 '>Submit</button>
            </div>

        </div>
    </div>
    </>
    )
}

export default Login;