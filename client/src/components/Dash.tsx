import PieChart from "./PieChart";
import BarChart from "./BarChart";
import LineChart from "./LineChart";
import InsightPanel from "./InsightPanel";


type DashProps = {
    data: any;
};

export default function Dash ({data}: DashProps){
	

let dataSpendTotal = 0;
let dataCountTotal = 0;
let dateSplit = data.dateSplit 
let locationSplit = data.locationSplit
 
let largestState = "";
let largestStateValue = 0;
let largestStateValueDisplay = "";

let largestMonth = "";
let largestMonthValue = 0;
let largestMonthValueDisplay = "";

for (let i = 0; i < locationSplit.length; i++){
    if (locationSplit[i].spendTotal > largestStateValue){
        largestState = locationSplit[i].location;
        largestStateValue = Math.round(locationSplit[i].spendTotal *100)/100;
        largestStateValueDisplay =`$ ${(Math.round(locationSplit[i].spendTotal *100)/100).toLocaleString()}`;     
    }
}

for (let i = 0; i < dateSplit.length; i++){
    if (dateSplit[i].spendTotal > largestMonthValue){
        largestMonth = dateSplit[i].month;
        largestMonthValue = Math.round(dateSplit[i].spendTotal *100)/100; 
        largestMonthValueDisplay =`$ ${( Math.round(dateSplit[i].spendTotal *100)/100).toLocaleString()}`;      
    }
}




for (let i = 0; i < dateSplit.length; i++){
        dataSpendTotal += Number(dateSplit[i].spendTotal);
        dataCountTotal += dateSplit[i].count;
        }
dataSpendTotal = `$ ${(Math.round(dataSpendTotal * 100)/100).toLocaleString()}`;
dataCountTotal = Math.round(dataCountTotal * 100)/100;

    return (
        <div className = "align-center">
            <div>
                <div className = "flex flex-row ml-5 justify-between">
                    <InsightPanel title="Total Sales $" data={dataSpendTotal}/>
                    <InsightPanel title="Total Sales" data={dataCountTotal.toLocaleString()}/>
                
                    <InsightPanel title="Most sales per state" data={largestState.toUpperCase()}/>
                    <InsightPanel title="Largest State sales $" data={largestStateValueDisplay}/>
                
                    <InsightPanel title="Most sales per month" data={largestMonth.toUpperCase()}/>
                    <InsightPanel title="Largest Month sales $" data={largestMonthValueDisplay}/>
                
                </div>
                <div className="flex flex-row ml-5">
                    <div>
                        <div className="mt-5">
                            <BarChart
                                data={data}
                                title="Sales per State"
                                selection="spendTotal"
                            />
                        </div>
                        <div className="mt-5">
                            <LineChart
                                data={data}
                                title="Sales over time"
                                selection="spendTotal"
                            />
                        </div>
                    </div>
                    <div className="mt-5 ml-5">
                        <div>
                            <PieChart
                                data={data}
                                title="Total sales"
                                selection="count"
                            />
                        </div>
                        <div>
                            <PieChart
                                data={data}
                                title="Total spend"
                                selection="spendTotal"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

