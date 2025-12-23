export default function DashDisplay({count, totalSpend, avgSpend}) {
    return(
        <>
            <div className="DashDisplay">
                <StatBox title="total" value={count}/>
                <StatBox title="Total spend" value={totalSpend}/>
                <StatBox title="Avg spend" value={avgSpend}/>
            </div>
        </>
    );
}
function StatBox({title, value}){
    return (
        <div className="relative rounded-lg border box-shadow-10 border-gray-300 bg-white px-3 pb-3 mb-3 pt-3 w-32">
            <span className="absolute -top-2 left-3 bg-white px-1 text-xs font-medium text-gray-500">
                {title}
            </span>
            <div className="text 2xl font-semibold text-gray-900">
                {value}
            </div>
        </div>
    );
}

