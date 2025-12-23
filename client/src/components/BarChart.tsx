import {useEffect, useRef} from 'react'
import { Chart, ArcElement, Tooltip, Legend}from 'chart.js/auto';

Chart.register(ArcElement, Tooltip, Legend);


const BarChart: React.FC = ({data, selection,title}) => {
    const stateSplit = data.data.processed.locationSplit 
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const chartRef = useRef<Chart | null>(null);
    
    const data00 = stateSplit[0][selection]
    const data01 = stateSplit[1][selection]
    const data02 = stateSplit[2][selection]
    const data03 = stateSplit[3][selection]
    const data04 = stateSplit[4][selection]
    const data05 = stateSplit[5][selection]
    const data06 = stateSplit[6][selection]
    const data07 = stateSplit[7][selection]
    const data08 = stateSplit[8][selection]
    const data09 = stateSplit[9][selection]
    const data10 = stateSplit[10][selection]
    const data11 = stateSplit[11][selection]
    const data12 = stateSplit[12][selection]
    const data13 = stateSplit[13][selection]
    const data14 = stateSplit[14][selection]
    const data15 = stateSplit[15][selection]
    const data16 = stateSplit[16][selection]
    const data17 = stateSplit[17][selection]
    const data18 = stateSplit[18][selection]
    const data19 = stateSplit[19][selection]
    const data20 = stateSplit[20][selection]
    const data21 = stateSplit[21][selection]
    const data22 = stateSplit[22][selection]
    const data23 = stateSplit[23][selection]
    const data24 = stateSplit[24][selection]
    const data25 = stateSplit[25][selection]
    const data26 = stateSplit[26][selection]
    const data27 = stateSplit[27][selection]
    const data28 = stateSplit[28][selection]
    const data29 = stateSplit[29][selection]
    const data30 = stateSplit[30][selection]
    const data31 = stateSplit[31][selection]
    const data32 = stateSplit[32][selection]
    const data33 = stateSplit[33][selection]
    const data34 = stateSplit[34][selection]
    const data35 = stateSplit[35][selection]
    const data36 = stateSplit[36][selection]
    const data37 = stateSplit[37][selection]
    const data38 = stateSplit[38][selection]
    const data39 = stateSplit[39][selection]
    const data40 = stateSplit[40][selection]
    const data41 = stateSplit[41][selection]
    const data42 = stateSplit[42][selection]
    const data43 = stateSplit[43][selection]
    const data44 = stateSplit[44][selection]
    const data45 = stateSplit[45][selection]
    const data46 = stateSplit[46][selection]
    const data47 = stateSplit[47][selection]
    const data48 = stateSplit[48][selection]
    const data49 = stateSplit[49][selection]

    useEffect(() => {

    const ctx = canvasRef.current?.getContext("2d");

    chartRef.current = new Chart(ctx, {
        type:"bar",
        data: {
            labels: [
                "Alabama","Alaska","Arizona","Arkansas","California",
                "Colorado","Connecticut","Delaware","Florida","Georgia","Hawaii","Idaho","Illinois","Indiana",
                "Iowa","Kansas","Kentucky","Louisiana","Maine","Maryland","Massachusetts","Michigan","Minnesota",
                "Mississippi","Missouri","Montana","Nebraska","Nevada","New Hampshire","New Jersey","New Mexico","New York",
                "North Carolina","North Dakota","Ohio","Oklahoma","Oregon","Pennsylvania","Rhode Island","South Carolina",
                "South Dakota","Tennessee","Texas","Utah","Vermont","Virginia","Washington","West Virginia","Wisconsin"
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
                        data09,
                        data10,
                        data11,
                        data12,
                        data13,
                        data14,
                        data15,
                        data16,
                        data17,
                        data18,
                        data19,
                        data20,
                        data21,
                        data22,
                        data23,
                        data24,
                        data25,
                        data26,
                        data27,
                        data28,
                        data29,
                        data30,
                        data31,
                        data32,
                        data33,
                        data34,
                        data35,
                        data36,
                        data37,
                        data38,
                        data39,
                        data40,
                        data41,
                        data42,
                        data43,
                        data44,
                        data45,
                        data46,
                        data47,
                        data48,
                        data49
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
                plugins: { legends: {position: "bottom"} },    
            },
        });
        return () => chartRef.current?.destroy();
    }, [data]);

    return (
        <div className="container justify-left h-150  p-6 bg-stone-100 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold text-stone-700 text-center mb-4">
                {title}
            </h2>
            <canvas ref={canvasRef} className="flex justify-content-center"width={1000} height={500} />
        </div>
    );
};

export default BarChart;
