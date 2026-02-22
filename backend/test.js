import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';

dotenv.config();

const uri = process.env.MONGO_URI;

console.log("Testing connection with native MongoDB driver...");
console.log("URI:", uri?.substring(0, 40) + "...");

const client = new MongoClient(uri);

async function run() {
    try {
        await client.connect();
        console.log("✅ Connected successfully with native driver!");
        await client.db("admin").command({ ping: 1 });
        console.log("✅ Ping successful!");
    } catch(error) {
        console.error("❌ Error:", error.message);
    } finally {
        await client.close();
    }
}

run();