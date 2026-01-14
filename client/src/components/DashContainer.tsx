import DashDisplay from './DashDisplays';

 
type DashProps = {
    data: any;
};

export default function DashContainer({data}: DashProps) {

let genderSplit = data.data.processed.genderSplit
    return (
        <>
            <div className = "flex flex-row justify-content-center">
                <div className = "flex justify-center">
                    <div className="grid grid-cols-[100px_repeat(2,130px)]
                                    grid-rows-[60px_repeat(5,180px) p-4]
                                    bg-white p-4 mt-4 mb-4 rounded-lg
                                    shadow-lg
                        " >
                        <div></div>
                        <p className="text-3xl font-bold text-gray-800 mb-4">MEN</p>
                        <p className="text-3xl font-bold text-gray-800 mb-4">WOMEN</p>
                        <p className="text-3xl font-bold text-gray-800 mb-4">Under 25</p>
                        <DashDisplay
                            count={genderSplit[5].count}
                            totalSpend={genderSplit[5].spendTotal}
                            avgSpend={genderSplit[5].spendAvg}
                        />
                        <DashDisplay
                            count={genderSplit[0].count}
                            totalSpend={genderSplit[0].spendTotal}
                            avgSpend={genderSplit[0].spendAvg}
                        />
                        <p className="text-3xl font-bold text-gray-800 mb-4 align-center ">25-34</p>
                        <DashDisplay
                            count={genderSplit[6].count}
                            totalSpend={genderSplit[6].spendTotal}
                            avgSpend={genderSplit[6].spendAvg}
                        />
                        <DashDisplay
                            count={genderSplit[1].count}
                            totalSpend={genderSplit[1].spendTotal}
                            avgSpend={genderSplit[1].spendAvg}
                        />
                        <p className="text-3xl font-bold text-gray-800 mb-4">35-44</p>
                        <DashDisplay
                            count={genderSplit[7].count}
                            totalSpend={genderSplit[7].spendTotal}
                            avgSpend={genderSplit[7].spendAvg}
                        />
                        <DashDisplay
                            count={genderSplit[2].count}
                            totalSpend={genderSplit[2].spendTotal} 
                            avgSpend={genderSplit[2].spendAvg}
                        />
                        <p className="text-3xl font-bold text-gray-800 mb-4">45-54</p>
                        <DashDisplay
                            count={genderSplit[8].count}
                            totalSpend={genderSplit[8].spendTotal}
                            avgSpend={genderSplit[8].spendAvg}
                        />
                        <DashDisplay
                            count={genderSplit[3].count}
                            totalSpend={genderSplit[3].spendTotal} 
                            avgSpend={genderSplit[3].spendAvg}
                        />
                         <p className="text-3xl font-bold text-gray-800 mb-4">55+</p>
                        <DashDisplay
                            count={genderSplit[9].count}
                            totalSpend={genderSplit[9].spendTotal}
                            avgSpend={genderSplit[9].spendAvg}
                        />
                        <DashDisplay
                            count={genderSplit[4].count}
                            totalSpend={genderSplit[4].spendTotal} 
                            avgSpend={genderSplit[4].spendAvg}
                        />
                    </div>
                </div>
            </div>
        </>
    );
};
