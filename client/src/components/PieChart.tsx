import {useEffect, useRef} from 'react'
import { Chart, ArcElement, Tooltip, Legend}from 'chart.js/auto';
import type {ChartProps} from './Dash.tsx';

Chart.register(ArcElement, Tooltip, Legend);


const PieChart = ({data, selection, title}:ChartProps) => {

	console.log("title: ", title);
	
	const genderSplit = data.genderSplit 
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const chartRef = useRef<Chart | null>(null);
    
    const data00 = genderSplit[0][selection]
    const data01 = genderSplit[1][selection]
    const data02 = genderSplit[2][selection]
    const data03 = genderSplit[3][selection]
    const data04 = genderSplit[4][selection]
    const data05 = genderSplit[5][selection]
    const data06 = genderSplit[6][selection]
    const data07 = genderSplit[7][selection]
    const data08 = genderSplit[8][selection]
    const data09 = genderSplit[9][selection]


    useEffect(() => {

    const ctx = canvasRef.current?.getContext("2d");
	if (!ctx) return;

    chartRef.current = new Chart(ctx, {
        type:"pie",
        data: {
            labels: [
                "M under 25", //index 5
                "W under 25", //index 0
                "M 25-34",    //index 6
                "W 25-34",    //index 1
                "M 35-44",    //index 7
                "W 35-44",    //index 2
                "M 45-54",    //index 8
                "W 45-54",    //index 3
                "M 55+",      //index 9
                "W 55+",      //index 4
            ],
            datasets: [
                {
                    data:[
                        data00,
                        data01,
                        data02,
                        data03,
                        data04,
                        data05,
                        data06,
                        data07,
                        data08,
                        data09
                        ],
                    backgroundColor: [
                        "#ff6384",
                        "#36a2eb",
                        "#ffcd56",
                        "#4bc0c0",
                        "#9966ff",
                        "#ff9f40",
                        "#c9cbcf",
                        "#8dd1e1",
                        "#d4a6c8",
                        "#a4de6c"
                        ], 
                    },
                ],
            },
            options:{    
                responsive: true,
                plugins: { legend: {position: "bottom"} },    
            },
        });
        return () => chartRef.current?.destroy();
    }, [data]);

    return (
        <div className="flex flex-col items-center h-150 w-120 p-5 bg-white rounded-lg shadow-lg mb-5 pt-10">
            <h1 className="text-5xl font-bold text-stone-600 text-center mb-10">
				{title}
            </h1>
            <canvas ref={canvasRef} width={400} height={400} />
        </div>
    );
};

export default PieChart;
