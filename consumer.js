const rabbitmqConnection = require("./rabbitmqConnection");
const queueName = "emailQueue"

async function onConsumeEmail(){
    const connection = await rabbitmqConnection();
    channel = await connection.createChannel();
    await channel.assertQueue(queueName);
    channel.consume(queueName,(email) => {
        console.log(email.content.toString())
        setTimeout(() => {
            const mail = JSON.parse(email.content.toString());
            console.log(`The email was sent to ${mail}.`);
            channel.ack(email);
        }, 3000);
    })
}

onConsumeEmail();