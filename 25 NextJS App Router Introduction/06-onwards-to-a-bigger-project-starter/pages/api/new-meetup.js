import { MongoClient } from "mongodb"

export default async function handler(req, res){
    if(req.method==="POST"){
        const data = req.body

        const client  = await MongoClient.connect("mongodb+srv://ahmed:OUPEQnQ0OXPWuiZl@cluster0.pdppllx.mongodb.net/meetups?retryWrites=true&w=majority&appName=Cluster0")
        const db = client.db("meetups")

        const meetUpCollection = db.collection("meetups")

        const result = await meetUpCollection.insertOne(data)

        console.log(result)

        client.close()

        res.status(201).json({message:"meet up inserted"})
    }
}