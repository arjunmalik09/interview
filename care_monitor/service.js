const http = require('node:http');
const { getHeartBeatMeasurement } = require('./handler.js');

http.createServer((req, res) => {
    if (req.url === '/getHeartBeatMeasurement' && req.method === 'POST') {
        let data = '';
        req.on('data', (jsonData) => {
            data += jsonData;
        });
        req.on('end', () => {
            const requestData = JSON.parse(data);
            console.log(requestData);
            res.end(JSON.stringify(getHeartBeatMeasurement(requestData)));
        });
        res.writeHead(200);
    } else {
        res.writeHead(200);
        res.end(`
            CareMonitor Interview Assignment:
            1. Run a curl
                curl -d "@clinical_metrics.json" -X POST https://jubilant-space-succotash-96pr996pj47f74w6-8000.app.github.dev/getHeartBeatMeasurement
                a. clinical_metrics.json is available at https://caremonitor.clickup.com/docs/6920800/p/h/6k6k0-4232/7c4ba0ef6019ab8
        `);
    }
}).listen(8000);