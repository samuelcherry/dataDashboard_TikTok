import PieChart from "./PieChart";
import BarChart from "./BarChart";
import LineChart from "./LineChart";
import InsightPanel from "./InsightPanel";


type DashProps = {
    data: any;
};


export interface ChartProps {
	data:any;
	title:string;
	selection:string;
}

export default function Dash ({data}: DashProps){
	
	let dataSpendTotal = 0;
	let dataCountTotal = 0;
	let dateSplit = data.dateSplit 
	let locationSplit = data.locationSplit
 
	let largestState = "";
	let largestStateValue = 0;

	let largestMonth = "";
	let largestMonthValue = 0;

	for (let i = 0; i < locationSplit.length; i++){
    	if (locationSplit[i].spendTotal > largestStateValue){
        	largestState = locationSplit[i].location;
        	largestStateValue = Math.round(locationSplit[i].spendTotal *100)/100;
    	}
	}

	for (let i = 0; i < dateSplit.length; i++){
    	if (dateSplit[i].spendTotal > largestMonthValue){
        	largestMonth = dateSplit[i].month;
        	largestMonthValue = Math.round(dateSplit[i].spendTotal *100)/100; 
    	}
	}

	for (let i = 0; i < dateSplit.length; i++){
        dataSpendTotal += Number(dateSplit[i].spendTotal);
        dataCountTotal += dateSplit[i].count;
        }
	dataSpendTotal = Math.round(dataSpendTotal * 100)/100;
	dataCountTotal = Math.round(dataCountTotal * 100)/100;

    return (
        <div className = "align-center">
            <div>
                <div className = "flex flex-row ml-5 justify-between">
                    <InsightPanel
						title="Total Sales $"
						data={`$ ${dataSpendTotal.toLocaleString()}`}
						selection=""
					/>
                    <InsightPanel
						title="Total Sales"
						data={dataCountTotal.toLocaleString()}
						selection=""
					/>
                    <InsightPanel
						title="Most sales per state"
						data={largestState.toUpperCase()}
						selection=""
					/>
                    <InsightPanel
						title="Largest State sales $"
						data={`$ ${largestStateValue.toLocaleString()}`}
						selection=""
					/>
                    <InsightPanel
						title="Most sales per month"
						data={largestMonth.toUpperCase()}
						selection=""
					/>
                    <InsightPanel
						title="Largest Month sales $"
						data={`$ ${largestMonthValue.toLocaleString()}`}
						selection=""
					/>
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

