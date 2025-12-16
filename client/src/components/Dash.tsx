import {useEffect, useState} from 'react';
import DashDisplay from './DashDisplays';


export default function Dash() {
	
let count = ""
let totalSpend= ""
let avgSpend = ""
    return (
        <>
            <div className=" grid grid-cols-3 grid-rows-6" >
                <div></div>
                <h4>MEN</h4>
                <h4>WOMEN</h4>
                <h4>under 25</h4>
                <DashDisplay
                    count="20"
                    totalSpend="$200"
                    avgSpend="$10"
                />
                <DashDisplay
                    count="10"
                    totalSpend="$50"
                    avgSpend="$5"
                />
            </div>
        </>
    );
};

