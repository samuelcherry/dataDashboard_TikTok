stateBuckets = {
    "Alabama": initBucket(),
    "Alaska": initBucket(),
    "Arizona": initBucket(),
    "Arkansas": initBucket(),
    "California": initBucket(),
    "Colorado": initBucket(),
    "Connecticut": initBucket(),
    "Delaware": initBucket(),
    "Florida": initBucket(),
    "Georgia": initBucket(),
    "Hawaii": initBucket(),
    "Idaho": initBucket(),
    "Illinois": initBucket(),
    "Indiana": initBucket(),
    "Iowa": initBucket(),
    "Kansas": initBucket(),
    "Kentucky": initBucket(),
    "Louisiana": initBucket(),
    "Maine": initBucket(),
    "Maryland": initBucket(),
    "Massachusetts": initBucket(),
    "Michigan": initBucket(),
    "Minnesota": initBucket(),
    "Mississippi": initBucket(),
    "Missouri": initBucket(),
    "Montana": initBucket(),
    "Nebraska": initBucket(),
    "Nevada": initBucket(),
    "New Hampshire": initBucket(),
    "New Jersey": initBucket(),
    "New Mexico": initBucket(),
    "New York": initBucket(),
    "North Carolina": initBucket(),
    "North Dakota": initBucket(),
    "Ohio": initBucket(),
    "Oklahoma": initBucket(),
    "Oregon": initBucket(),
    "Pennsylvania": initBucket(),
    "Rhode Island": initBucket(),
    "South Carolina": initBucket(),
    "South Dakota": initBucket(),
    "Tennessee": initBucket(),
    "Texas": initBucket(),
    "Utah": initBucket(),
    "Vermont": initBucket(),
    "Virginia": initBucket(),
    "Washington": initBucket(),
    "West Virginia": initBucket(),
    "Wisconsin": initBucket(),
    "Wyoming": initBucket()
}

function initBucket() {
    return {
        location:"",
        count: 0,
        spendTotal: 0,
    }
}

function stateSplit(arr) {
    
    const bucketMap = new Map();

    for (const row of arr) {
        const location = row.location.toLowerCase();
        const spend = Math.round(Number(row.spend)*100)/100;
        const key = `${location}`;

        if(!bucketMap.has(key)){
            bucketMap.set(key, {
                location:"",
                count:0,
                spendTotal:0,
            });        
        }


        const bucket = bucketMap.get(key);
        bucket.count += 1;
        bucket.spendTotal += spend;
        bucket.location = location;
        }
        ordered = Array.from(bucketMap.values());
        ordered.sort((a,b) => a.location.localeCompare(b.location));
        return ordered

    }

module.exports = stateSplit;

