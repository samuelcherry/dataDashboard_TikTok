import {useEffect, useState} from 'react';
import DashDisplay from './DashDisplays';
import PieChart from "./PieChart";

type DashProps = {
    data: any;
};


export default function Dash ({data}: DashProps){
	
let count = ""
let totalSpend= ""
let avgSpend=""
    return (
        <>
            <div className = "flex flex-row bg-red-500 justify-content-center">
                <div className = "flex justify-center bg-green-400 w-150">
                    <div className=" grid grid-cols-[100px_repeat(2,180px)] grid-rows-[60px_repeat(5,180px) p-8]" >
                        <div></div>
                        <p className="text-3xl font-bold text-gray-800 mb-4">MEN</p>
                        <p className="text-3xl font-bold text-gray-800 mb-4">WOMEN</p>
                        <p className="text-3xl font-bold text-gray-800 mb-4">Under 25</p>
                        <DashDisplay
                            count={data.data.processed[5].count}
                            totalSpend={data.data.processed[5].spendTotal}
                            avgSpend={data.data.processed[5].spendAvg}
                        />
                        <DashDisplay
                            count={data.data.processed[0].count}
                            totalSpend={data.data.processed[0].spendTotal}
                            avgSpend={data.data.processed[0].spendAvg}
                        />
                        <p className="text-3xl font-bold text-gray-800 mb-4">25-34</p>
                        <DashDisplay
                            count={data.data.processed[6].count}
                            totalSpend={data.data.processed[6].spendTotal}
                            avgSpend={data.data.processed[6].spendAvg}
                        />
                        <DashDisplay
                            count={data.data.processed[1].count}
                            totalSpend={data.data.processed[1].spendTotal}
                            avgSpend={data.data.processed[1].spendAvg}
                        />
                        <p className="text-3xl font-bold text-gray-800 mb-4">35-44</p>
                        <DashDisplay
                            count={data.data.processed[7].count}
                            totalSpend={data.data.processed[7].spendTotal}
                            avgSpend={data.data.processed[7].spendAvg}
                        />
                        <DashDisplay
                            count={data.data.processed[2].count}
                            totalSpend={data.data.processed[2].spendTotal}
                            avgSpend={data.data.processed[2].spendAvg}
                        />
                        <p className="text-3xl font-bold text-gray-800 mb-4">45-54</p>
                        <DashDisplay
                            count={data.data.processed[8].count}
                            totalSpend={data.data.processed[8].spendTotal}
                            avgSpend={data.data.processed[8].spendAvg}
                        />
                        <DashDisplay
                            count={data.data.processed[3].count}
                            totalSpend={data.data.processed[3].spendTotal}
                            avgSpend={data.data.processed[3].spendAvg}
                        />
                        <p className="text-3xl font-bold text-gray-800 mb-4">55+</p>
                        <DashDisplay
                            count={data.data.processed[9].count}
                            totalSpend={data.data.processed[9].spendTotal}
                            avgSpend={data.data.processed[9].spendAvg}
                        />
                        <DashDisplay
                            count={data.data.processed[4].count}
                            totalSpend={data.data.processed[4].spendTotal}
                            avgSpend={data.data.processed[4].spendAvg}
                        />
                    </div>
                </div>
                <div className="bg-blue-600 w-250">
                    <PieChart/>
                </div>
            </div>
        </>
    );
};

