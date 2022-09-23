import React from 'react'
import { useState } from 'react';
export default function Data({ props }) {
    let transactions = JSON.parse(localStorage.getItem("transactions"));
    const [data, setData] = useState([transactions])
    const credit = {
        backgroundColor: "#4bb94b",
        borderColor: "#357235"
    }

    const debit = {
        backgroundColor: "#d13d3d",
        borderColor: "#581f1f"
    }
    return (
        <div>
            {
                data[0].map((data) => {
                    return (
                        <div className='border-2 w-[100%] text-[17px] md:text-[22px] h-[45px] my-[15px] px-[20px] py-[40px] md:h-[60px] rounded-[10px] flex justify-between items-center text-white'
                            style={data.status == 'Credited' ? credit : debit}
                        >
                            <div>
                                ₹ {data.amount}
                            </div>

                            <div>
                                {data.status}
                            </div>

                            <div>
                                <div>
                                    {data.time.slice(0, 16)}
                                </div>
                                <div>
                                    {data.time.slice(15, 24)}
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}
