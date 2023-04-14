const redis = require('redis')

const redis1 = redis.createClient({
    host: 'redis1',
    port: 6379
})
const redis2 = redis.createClient({
    host: 'redis2',
    port: 6380
})
const redis3 = redis.createClient({
    host: 'redis3',
    port: 6381
})
const startRedis = async () => {
    const response1 = await redis1.connect()
    const response2 = await redis2.connect()
    const response3 = await redis3.connect()
}

module.exports = {
    redis1,
    redis2,
    redis3,
    startRedis
}