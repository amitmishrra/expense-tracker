import "./Style.css"
import { useEffect, useState } from "react";


let transactions = JSON.parse(localStorage.getItem("transactions")) || [];
let usersData = JSON.parse(localStorage.getItem("usersData"));
let chartData = JSON.parse(localStorage.getItem("chartData"))|| {
    amount : [],
    time : []
};
const Home = () => {
    const [inputBalance, setInputBalance] = useState()
    const [input, setInput] = useState()
    const [currentBalance, setCurrentBalance] = useState(parseInt(localStorage.getItem('currentBalance')) || 0)

    const handleChange = (event) => {
        setInput(parseInt(event.target.value))
        setInputBalance(parseInt(event.target.value));
    }

    const credit = () => {
        setCurrentBalance(currentBalance + inputBalance);
        setInput('')
        var date = new Date();
        transactions.unshift({
            amount : inputBalance,
            status : 'Credited',
            time : `${date}`
        });

        chartData.amount.push(inputBalance);
        chartData.time.push(`${date.toString().slice(15, 21)}`)
    }

    const debit = () => {
        setCurrentBalance(currentBalance - inputBalance);
        setInput('')
        var date = new Date();
        transactions.unshift({
            amount : inputBalance,
            status : 'Debited',
            time : `${date}`
        });

      
    }

    const reset = () => {
        setCurrentBalance(0);
    }

    useEffect(() => {
        var date = new Date();
        chartData.amount.push(currentBalance);
        chartData.time.push(`${date.toString().slice(15, 21)}`)

        localStorage.setItem('currentBalance', currentBalance);
        localStorage.setItem("transactions", JSON.stringify(transactions));
        localStorage.setItem("chartData", JSON.stringify(chartData));
        console.log(chartData);
    }, [currentBalance])


    
    return (
        <>
            <div className="pt-44 w-[90%] md:w-1/2 m-auto h-[85vh] flex flex-col justify-center items-center font-class">
                <div className="currentBalance text-[25px] text-white md:text-[35px]">
                   Balance : ₹ {currentBalance}
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
                            value={input}
                        />
                    </div>

                    <div className="buttons w-full">
                        <div className="actionButton flex justify-evenly w-full">
                            <button onClick={credit} disabled={inputBalance ? false : true} className="actionButtons w-1/4 bg-green-500">
                                Credit
                            </button>

                            <button onClick={debit} disabled={inputBalance ? false : true} className="actionButtons w-1/4 bg-red-500">
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