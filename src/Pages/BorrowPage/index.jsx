import './Style.css'

const Borrow = () => {
    return (
        <>
            <div className="borrowpage flex items-center pt-[85px] h-[100vh]">

                <div className="borrowInput pt-[60px] bg-orange-200 text-white flex flex-col items-center w-[40%] h-[95vh]  ">
                        <h3 className=" pt-[24px] text-[25px]">Borrow/Lend</h3>
                    <ul className="infoField mt-8 text-center w-[auto] flex flex-col items-center justify-around ">
                        <li><input type="number" placeholder='Amount' /></li>
                        <li><input type="text" placeholder='Name' /></li>
                        <li><input type="tel" placeholder='Number'/></li>
                        <li><input type="date" placeholder='Date' /></li>
                        <li><input type="date" placeholder='Return date'/></li>
                    </ul>
                    <div className="buttons flex mt-12 ">
                        <button className="borrow">Borrow</button>
                        <button className="lend">Lend</button>
                    </div>   
                </div>

                <div className="heroData h-[90vh] w-[100%] right-0  text-white ">
                    <div className="h-[23vh] w-[100%] right-0 bg-blue-600"></div>
                    <div className="h-[23vh] w-[100%] right-0 bg-blue-800"></div>
                    <div className="h-[23vh] w-[100%] right-0 bg-blue-600"></div>
                    <div className="h-[23vh] w-[100%] right-0 bg-blue-800"></div>
                    <div className="h-[23vh] w-[100%] right-0 bg-blue-600"></div>
                    <div className="h-[23vh] w-[100%] right-0 bg-blue-800"></div>
                    <div className="h-[23vh] w-[100%] right-0 bg-blue-600"></div>
                    <div className="h-[23vh] w-[100%] right-0 bg-blue-800"></div>
                    
                </div>

            </div>
        </>
    )
}

export default Borrow;