
const state = {

    M: {
        "under 25": initBucket(),
        "25-34": initBucket(),
        "35-44": initBucket(),
        "45-54": initBucket(),
        "55+": initBucket(),
    },
    F: {
        "under 25": initBucket(),
        "25-34": initBucket(),
        "35-44": initBucket(),
        "45-54": initBucket(),
        "55+": initBucket(),
    }
}




function initBucket() {
    return {
        gender:"",
        age:"",
        count: 0,
        spendTotal: 0,
        spendAvg: 0,
    }   
}

function getAgeGroup(num) {
    if(num < 25) {
        return "under 25"
    }else if (num > 24 && num < 35) {
        return "25-34"
    }else if (num > 34 && num < 45) {
        return "35-44"
    }else if (num > 44 && num < 55) {
        return "45-54"
    }else if (num > 54 && num < 100) {
        return "55+"
    }else{
        return "out of range"
    } 

}

function demoSplit(arr) {

    const bucketMap = new Map();
    
    for (const row of arr) {
        const gender = row.gender.toUpperCase();
        const ageGroup = getAgeGroup(Number(row.age));    
        const spend = Number(row.spend);
        
        const key = `${gender}-${ageGroup}`;

        if(!bucketMap.has(key)) {
            bucketMap.set(key, {
                gender,
                ageGroup,
                count:0,
                spendTotal: 0,
                spendAvg: 0,
            });
        }

        const bucket = bucketMap.get(key);
        bucket.count += 1;
        bucket.spendTotal += spend;
        bucket.spendAvg = Number(
            (bucket.spendTotal/bucket.count).toFixed(2)
        );
    }
    return Array.from(bucketMap.values());
}

module.exports = demoSplit;
