import {useEffect, useState} from 'react';
import DashContainer from './DashContainer';
import PieChart from "./PieChart";
import BarChart from "./BarChart";
import LineChart from "./LineChart";


type DashProps = {
    data: any;
};

export default function Dash ({data}: DashProps){
	
let count = ""
let totalSpend= ""
let avgSpend=""
    return (
        <>
            <div className = "flex flex-row bg-gray-200">
                <div className = "flex justify-center w-120">
                    <DashContainer data={data}/> 
                </div>
                <div>
                    <div className="w-250 m-5">
                        <BarChart
                            data={data}
                            title="Sales per State"
                            selection="spendTotal"
                        />
                    </div>
                    <div className="flex flex-row justify-between">
                        <div className="m-5">
                            <PieChart
                                data={data}
                                title="Total sales"
                                selection="count"
                            />
                        </div>
                        <div className="m-5">
                            <PieChart
                                data={data}
                                title="Total spend"
                                selection="spendTotal"
                            />
                        </div>
                    </div>
                    <div>
                        <div className="m-4 bg-white rounded-lg shadow-lg w-250 h-75">
                        <LineChart
                            data={data}
                            title="Sales over time"
                            selection="spendTotal"
                        />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

