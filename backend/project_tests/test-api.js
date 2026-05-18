const http = require('http');

async function doReq(path, data) {
    return new Promise((resolve, reject) => {
        const req = http.request({
            hostname: 'localhost',
            port: 9090,
            path: path,
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }
        }, (res) => {
            let body = '';
            res.on('data', d => body += d);
            res.on('end', () => resolve({ status: res.statusCode, body: body }));
        });
        req.on('error', reject);
        req.write(JSON.stringify(data));
        req.end();
    });
}

async function test() {
    const initRes = await doReq('/api/v1/auth/register/init', {
        phone: '+998901112233'
    });
    console.log("INIT:", initRes);

    const initData = JSON.parse(initRes.body);
    const tempId = initData.data.tempId;

    // The code is random but we don't know it unless we read the cache or intercept bot.
    // wait, we can just look at Redis. I'll read from Redis.
}

test();
