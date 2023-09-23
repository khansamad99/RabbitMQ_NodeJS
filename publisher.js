const amqp = require('amqplib');

const myProfile = {
    "name":"Samad Khan",
    "job":"Software Engineer"
}

connect()
async function connect()
{
    try {
       const connection = await amqp.connect("amqp://localhost:5672")
       const channel = await connection.createChannel();
       const result = await channel.assertQueue("jobs");
       
       channel.sendToQueue("jobs",Buffer.from(JSON.stringify(myProfile)))
       console.log("Job Sent successfully")
    } catch (error) {
        console.error(error)
    }
}