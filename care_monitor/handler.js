const getHeartBeatMeasurement = (patientData) => {
    const heartRates = patientData?.clinical_data?.HEART_RATE?.data;
    heartRates.sort((a, b) => Date.parse(a.on_date) - Date.parse(b.on_date));
    const quarterHourGroups = heartRates?.reduce((groups, measure) => {
            if (groups.length === 0) {
                groups.push([measure]);
            } else {
                const lastGroup = groups[groups.length - 1];
                const intervalMiliseconds = 15 * 60 * 1000;
                console.log(Date.parse(measure.on_date) - Date.parse(lastGroup[0].on_date));
                if (Date.parse(measure.on_date) - Date.parse(lastGroup[0].on_date) < intervalMiliseconds) {
                    lastGroup.push(measure);
                } else {
                    groups.push([measure]);
                }
            }
            return groups;
        }, []
    );
    console.log(quarterHourGroups);
    return quarterHourGroups.map((elem) => ({
        from_date: elem[0].on_date,
        to_date: elem[elem.length - 1].on_date,
        measurement: {
            low: Math.min(...elem.map(_ => parseInt(_.measurement))),
            high: Math.max(...elem.map(_ => parseInt(_.measurement))),
        },
    }));
};
module.exports = {getHeartBeatMeasurement};