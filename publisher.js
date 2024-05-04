const rabbitmqConnection = require("./rabbitmqConnection");
const queueName = "emailQueue"

module.exports = async (email) => {
    try {
        const connection = await rabbitmqConnection();
        const channel = await connection.create();
        await channel.assertQueue(queueName);
        channel.sendQueue(queueName,Buffer.from(JSON.stringify({email: email})));
        console.log("went to the queue")
    } catch (error) {
        console.log(error)
    }
}