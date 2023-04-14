const { redis1, redis2, redis3 } = require("../loaders/redis");

module.exports = class RedisService{
    constructor(){
        this.client1 = redis1
        this.client2 = redis2
        this.client3 = redis3
    }

    set(cIndex, key, value){
        new Promise((resolve, reject) => {
            let client = null;
            let a;
            switch (cIndex) {
                case 1:
                    client = this.client1
                    break;
                case 2:
                    client = this.client2
                    break;
                case 3:
                    client = this.client3
                    a=2
                    break;
                default:
                    reject(new Error('Indice del cliente no existe'))
            }
            if(cIndex === 3){
                this.client3.set(key, value, (err, reply) => {
                    if(err)
                        reject(err)
                    resolve(reply)
                })
            }
            // client.set(key, value, (err, reply) => {
            //     if(err)
            //         reject(err)
            //     resolve(reply)
            // })
        })
    }
}