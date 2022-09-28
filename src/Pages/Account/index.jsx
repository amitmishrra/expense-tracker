import './style.css'
import Graph from "../ChartPage/Chart";
import usersData from "../LoginPage"

let name = JSON.parse(localStorage.getItem("usersData.name"));
let mail = JSON.parse(localStorage.getItem("usersData.mail"));
let number = JSON.parse(localStorage.getItem("usersData.number"));

const logout = () => {
    localStorage.clear();
    window.location.reload(false);
}

console.log(usersData.name);

const Account = () => {
    return (
        <>
            <div className=" flex flex-col md:flex-row pt-26 w-[100vw] ">
                <div className=" text-white flex flex-col justify-around md:mt-[10vh] items-center right-0 md:w-[50vw] md:h-[90vh] h-[100vh] ">
                    <div className=" flex flex-col justify-around items-center md:mt-3 mt-[10vh] md:rounded-[80px] rounded-[20px] p-3 md:h-[86%] h-[70%] md:w-[30vw] w-[70%] bg-amber-900 ">
                        <img className=" rounded-[50%]  w-[180px] h-[180px] md:mt-8 mt-[5vh] bg-white" src="/" alt="" />
                        <p>Name </p>
                        <p>Email</p>
                        <p>Phone number</p>
                        <p>example@upi</p>
                        <button onClick={logout}>Logout</button>
                        <img src="" alt="" />
                    </div>
                </div>
                <div className=" text-white flex flex-col items-center justify-around md:mt-[10vh] left-0 md:w-[50vw] md:h-[90vh] h-[92vh]  ">
                    <img className="w-[400px] h-[400px] bg-white" src="https://upiqr.in/api/qr?name=Amit&vpa=mishra4amit4@ybl" alt="" />
                    <h1 className=" text-3xl mb-8 ">example123@upi</h1>
                </div>
            </div>
        </>
    )
}

export default Account;