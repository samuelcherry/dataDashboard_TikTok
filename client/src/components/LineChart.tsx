import {useEffect, useRef} from 'react';

import {Chart, ArcElement, Tooltip} from 'chart.js/auto';

Chart.register(ArcElement, Tooltip);

const LineChart: React.FC = ({data,selection}) => {

    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const chartRef = useRef<Chart | null>(null);

    const Months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
 
    const monthSplit = data.dateSplit
    const data00 = monthSplit[0][selection]
    const data01 = monthSplit[1][selection]
    const data02 = monthSplit[2][selection]
    const data03 = monthSplit[3][selection]
    const data04 = monthSplit[4][selection]
    const data05 = monthSplit[5][selection]
    const data06 = monthSplit[6][selection]
    const data07 = monthSplit[7][selection]
    const data08 = monthSplit[8][selection]
    const data09 = monthSplit[9][selection]
    const data10 = monthSplit[10][selection]
    const data11 = monthSplit[11][selection]
    

    useEffect(() => {

        const ctx = canvasRef.current?.getContext("2d");

        chartRef.current = new Chart(ctx, {
            type:"line",
            data: {
                labels: Months,
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
                            data09,
                            data10,
                            data11,
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
            options: {
                plugins:{
                    legend: {
                        display:false
                    }
                }
            }
        });
        return () => chartRef.current?.destroy();
    },[]);

    return (
        <div className="justify-left bg-white rounded-lg shadow-lg p-5 w-270 h-150">
            <h2 className="text-xl font-bold text-stone-600 text-center" >
                Sales Over Time
            </h2>
            <canvas ref={canvasRef} />
        </div>
    );
};

export default LineChart;
