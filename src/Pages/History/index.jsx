import React from 'react'
import { useState } from 'react';
import Data from './Data';


export default function History() {
    let transactions = JSON.parse(localStorage.getItem("transactions"));
    const [data, setData] = useState([transactions])



    return (
        <div className='pt-20 md:pt-24 history-page'>
            <div id='headingText' className='text-center text-white  text-[30px] md:text-[40px] fixed w-full bg-[#12131f] py-4 z-[0]'>
                Your Transactions
            </div>

            <div className='w-[90%] md:w-1/2 m-auto mt-20 md:mt-24 z-[-1]'
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
