const { exec } = require("child_process");

const insertPostgres = (data) => {
    const dataString = ",".join(data.map((elem) => `('${elem?.from_date}'::timestamp, '${elem?.to_date}'::timestamp, ${elem?.measurement?.low}, ${elem?.measurement?.high})`));
    const command = `docker exec -it postgres-care-monitor /bin/bash -c "psql -U postgres -c \"
    INSERT INTO heart_rate VALUES ${dataString};
    \""`;
    exec(command);
}

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
    const measurements = quarterHourGroups.map((elem) => ({
        from_date: elem[0].on_date,
        to_date: elem[elem.length - 1].on_date,
        measurement: {
            low: Math.min(...elem.map(_ => parseInt(_.measurement))),
            high: Math.max(...elem.map(_ => parseInt(_.measurement))),
        },
    }));
    insertPostgres(measurements);
    return measurements;
};
module.exports = {getHeartBeatMeasurement};
