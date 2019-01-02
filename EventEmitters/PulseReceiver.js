const Pulsar = require('./Pulsar');

const pulsar = new Pulsar();

pulsar.on('pulse', () => console.log("Pulse Received"));
pulsar.start();

setTimeout(() => pulsar.stop(), 10000);