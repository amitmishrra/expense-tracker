import './style.css'
import Buttons from './Buttons'
import { useNavigate } from 'react-router-dom'
let usersData = JSON.parse(localStorage.getItem("usersData")) || [{
    name : "name",
    mail :"mail",
    number : "number",
    UPI : "UPI"
}];

const Account = () => {

    let navigate = useNavigate()
    const logout = () => {
        localStorage.clear();
        navigate("/");
        window.location.reload();
    }

    return (
        <>
            <div className=" flex flex-col md:flex-row pt-12 md:pt-20 md:items-center">
                <div className=" text-white flex flex-col justify-around  items-center right-0 md:w-[50vw] md:h-[90vh] h-[90vh]  ">
                    <div className="accInfo md:text-2xl text-xl flex flex-col justify-around items-center md:mt-11 mt-[30px] rounded-[20px] p-3 md:h-[86%] h-[85%] md:w-[30vw] w-[85%]  ">
                        <img className=" rounded-[50%]  md:w-[180px] w-[150px] md:h-[180px] h-[150px] md:mt-8 mt-[5vh] bg-white" src={usersData[0].avatar} alt="" />
                        <p>{usersData[0].name} </p>
                        <p>{usersData[0].mail}</p>
                        <p>{usersData[0].number}</p>
                        <p>{usersData[0].UPI}</p>
                        <button className='reset bg-red-600 px-4 py-2' onClick={logout}>Logout</button>
                    </div>
                </div>
                <div className="  flex flex-col items-center justify-around  md:py-[50px]  left-0 md:w-[50vw] md:h-[80vh] h-[70vh]  ">

                    <div className="logo">
                        Your QR Code
                    </div>

                    <img className="md:w-[300px] w-[250px] md:h-[300px] h-[250px] bg-white" 
                    src={`https://upiqr.in/api/qr?name=${usersData[0].name.split(" ")}&vpa=${usersData[0].UPI}`} alt="" />
                    <p id="upi" className="upi text-white text-2xl " value="Example123@upi">{usersData[0].UPI}</p>

                    <Buttons />
                </div>
            </div>
        </>
    )
}

export default Account;