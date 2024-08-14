REQUIREMENTS DESCRIPTION:
Task 1: Create a NodeJS (using express) API to consume the payload given below.
Task 2: In the payload process HEART_RATE data separately as per this logic. Aggregate min and max heart rate for every 15 minutes.
Sample Output:
{
	"from_date": "2020-10-06T07:00:00.0Z",
	"to_date": "2020-10-06T07:15:00.0Z",
	"measurement" : {
		"low":"65",
        "high":"120"
	}
}, {
	"from_date": "2020-10-06T07:18:00.0Z",
	"to_date": "2020-10-06T07:23:00.0Z",
	"measurement" : {
		"low":"70",
        "high":"100"
	}
}
Task 3: Return the processed response including HEART_RATE and other metrics.
Task 4: Store the data in a Postgres table.

RUN HERE
1. Go to https://jubilant-space-succotash-96pr996pj47f74w6-8000.app.github.dev/
2. RUN from terminal: curl -d "@clinical_metrics.json" -X POST https://jubilant-space-succotash-96pr996pj47f74w6-8000.app.github.dev/getHeartBeatMeasurement
