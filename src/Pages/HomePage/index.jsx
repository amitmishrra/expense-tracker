import "./Style.css"
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux'
import {updateBalance, updateHistory, balanceData} from '../../Slice/Slice'

const Home = () => {
    // const storedBalance = useSelector((state) => state.currBalance)
    // const dispatch = useDispatch()

    const [inputBalance, setInputBalance] = useState()
    const [currentBalance, setCurrentBalance] = useState(parseInt(localStorage.getItem('currentBalance')) || 0)

    const handleChange = (event) => {
        setInputBalance(parseInt(event.target.value));
    }

    const credit = () => {
        setCurrentBalance(currentBalance + inputBalance);
    }

    const debit = () => {
        setCurrentBalance(currentBalance - inputBalance);
    }

    const reset = () =>{
        setCurrentBalance(0);
    }

    useEffect(() => {
        localStorage.setItem('currentBalance', currentBalance);
        
        // dispatch(updateBalance(12));
        // console.log(storedBalance);
    }, [currentBalance])

    

    return (
        <>
            <div className=" mt-12  w-[90%] md:w-1/2 m-auto h-[65vh] flex flex-col justify-center items-center">
                <div className="currentBalance text-[25px] md:text-[35px]">
                    Current Balance : ₹{currentBalance}
                </div>
                <div className="homeContainer mt-12 w-full flex flex-col justify-around items-center h-full">
                    <div className="text-[25px] md:text-[30px] text-white">
                        New Transaction
                    </div>

                    <div className="balanceInput">
                        <input className="input"
                            placeholder="Enter Amount"
                            type="number"
                            onChange={handleChange}
                             />
                    </div>

                    <div className="buttons w-full">
                        <div className="actionButton flex justify-evenly w-full">
                            <button onClick={credit} disabled={inputBalance?false:true } className="actionButtons w-1/4 bg-green-500">
                                Credit
                            </button>

                            <button onClick={debit} disabled={inputBalance?false:true } className="actionButtons w-1/4 bg-red-500">
                                Debit
                            </button>
                        </div>

                        <div className="flex justify-center mt-4">
                            <button onClick={reset} className="reset p-[5px] w-3/4 m-auto bg-red-600 text-white">
                                Reset
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;