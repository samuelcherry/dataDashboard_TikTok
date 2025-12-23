   
const monthOrder = ["jan","feb","mar","apr","may","jun","jul","aug","sep","oct","nov","dec"];
 
monthBuckets = {
    "jan": initBucket(),
    "feb": initBucket(),
    "mar": initBucket(),
    "apr": initBucket(),
    "may": initBucket(),
    "jun": initBucket(),
    "jul": initBucket(),
    "aug": initBucket(),
    "sep": initBucket(),
    "oct": initBucket(),
    "nov": initBucket(),
    "dec": initBucket()
}

function initBucket() {
    return {
        month:"",
        count:0,
        spendTotal:0,
    }
}

function monthSplit(arr) {

    const bucketMap = new Map();

    for (const row of arr) {
        
        const month = row.month.toLowerCase();
        const spend = Math.round(Number(row.spend)*100)/100;
        const key = `${month}`;

        if(!bucketMap.has(key)){
            bucketMap.set(key, {
                month:"",
                count:0,
                spendTotal: 0,
            });
        }

        const bucket = bucketMap.get(key);
        bucket.count += 1;
        bucket.spendTotal += spend;
        bucket.month = month;
        }        
        ordered= Array.from(bucketMap.values());
        console.log("unordered: ",ordered);
         ordered.sort((a,b) => {
            return (monthOrder.indexOf(a.month) - monthOrder.indexOf(b.month));
        });
        console.log("ordered: ",ordered);
        return ordered
    }
module.exports = monthSplit;
