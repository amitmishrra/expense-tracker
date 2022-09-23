import React from 'react'
import { useState } from 'react';
import Data from './Data';


export default function History() {
    let transactions = JSON.parse(localStorage.getItem("transactions"));
    const [data, setData] = useState([transactions])



    return (
        <div>
            <div className='text-center  text-[30px] md:text-[40px]'>
                Your Transactions
            </div>

            <div className='w-[90%] md:w-1/2 m-auto mt-8 overflow-scroll'
            >
                {
                    transactions ? 
                    <Data/>
                    : 
                   <>
                    <div className='flex justify-center items-center text-white text-center text-[20px] md:text-[30px] '>
                        No Transactions Yet
                    </div>
                    </>
                }
            </div>

        </div>
    )
}
