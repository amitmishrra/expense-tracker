import React from 'react'
import { useState } from 'react';
import Data from './Data';
import Graph from "../ChartPage/Chart";

export default function History() {
    let transactions = JSON.parse(localStorage.getItem("transactions")) || [];

    return (
        <div className='pt-20 md:pt-24 history-page'>
            <div id='headingText' className='text-center text-white  text-[30px] md:text-[40px] fixed w-full bg-[#12131f] py-4 z-[0]'>
                Your Transactions
            </div>

            {
                transactions.length ==0 ?
                   <>
                        <div className='flex justify-center items-center text-white text-center mt-80 text-[20px] md:text-[30px] '>
                            No Transactions Yet
                        </div>
                    </>
                    :
                    <div className='flex flex-col md:flex-row w-full mt- md:mt-24'>
                    <div className="mt-24 md:p-4 w-[95%] md:w-1/2 m-auto">
                        <Graph />
                    </div>
                    <div className='w-[90%] md:w-1/2 m-auto mt-4  z-[-1]'>
                        <div className="w-[90%] h-[70vh] m-auto">
                            <Data />
                        </div>
                    </div>

                </div>
                  
            }





        </div>
    )
}
