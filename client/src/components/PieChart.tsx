import {useEffect, useRef} from 'react'
import {
    Chart,
    ArcElement,
    Tooltip,
    Legend,
} 
from 'chart.js/auto'

Chart.register(ArcElement, Tooltip, Legend);


const PieChart: React.FC = () => {
    
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const chartRef = useRef<Chart | null>(null);

    useEffect(() => {

    if(!canvasRef.current) return;

    if(chartRef.current){
        chartRef.current.destroy();
    }

    chartRef.current = new Chart(canvasRef.current, {
        type:"pie",
        data: {
            labels: [
                "M under 25",
                "W under 25",
                "M 25-34",
                "W 25-34",
                "M 35-44",
                "W 35-44",
                "M 45-54",
            ],
            datasets: [
                {
                    label: "Traffic",
                    data: [2112, 2343, 2545, 3423, 2365, 1985, 987],
                    backgroundColor: [
                        "rgba(63, 81, 181, 0.5)",
                        "rgba(77, 182, 172, 0.5)",
                        "rgba(66, 133, 244, 0.5)",
                        "rgba(156, 39, 176, 0.5)",
                        "rgba(233, 30, 99, 0.5)",
                        "rgba(66, 73, 244, 0.4)",
                        "rgba(66, 133, 244, 0.2)",
                        ],
                    },
                ],
            },
            options:{    
                responsive: true,
                plugins: {
                    legends: {
                        position: "bottom",
                    },    
                },    
            },
        });
        return () => {
            chartRef.current?.destroy();
        };
    }, []);


    return (
        <div className="container mx-auto p-6 max-w-lg bg-stone-100 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold text-stone-700 text-center mb-4">
                Traffic Pie Chart
            </h2>
            <canvas ref={canvasRef}/>
        </div>
    );
};

export default PieChart;
