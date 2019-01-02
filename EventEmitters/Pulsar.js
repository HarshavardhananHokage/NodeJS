const EventEmitter = require('events');

class Pulsar extends EventEmitter {

    start() {
        this.interval = setInterval(() => {
            console.log(`${new Date().toLocaleDateString} >>>> Pulse`);
            this.emit('pulse');
        }, 1000);
    }

    stop() {
        clearInterval(this.interval);
    }
}

module.exports = Pulsar;