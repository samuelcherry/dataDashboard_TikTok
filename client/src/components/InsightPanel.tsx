import type {ChartProps} from './Dash.tsx'
export default function InsightPanel({title, data}:ChartProps){

    return (
        <>
            <div className="container h-30 w-60 p-5 bg-white rounded-lg shadow-lg">
                <h2 className="font-bold w-60 text-stone-600 text-left text-lg">
                    {title}
                </h2>
                <p>{data}</p>
            </div>
        </>
    );
};
