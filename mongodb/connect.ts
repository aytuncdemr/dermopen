const { MongoClient } = require("mongodb");

const uri =
    "mongodb+srv://<name>:<password>@cluster0.w9zmqrr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(uri);

async function run() {
    try {
        await client.connect();
    } catch (error) {
        console.error(error);
    }
}

run();

export { client };
