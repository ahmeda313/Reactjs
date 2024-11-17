import { MongoClient, ObjectId } from "mongodb";
import Head from "next/head";

import MeetupDetails from "../../components/meetups/MeetupDetails";


export default function MeetupDetailsPage(props){
    return(
        <>
        <Head>
            <title>{props.meetUpData.title}</title>
            <meta title={props.meetUpData.title} content={props.meetUpData.description}/>
        </Head>
        <MeetupDetails {...props.meetUpData}/>
        </>
    )
}


export async function getStaticPaths(){
    const client = await MongoClient.connect("mongodb+srv://ahmed:OUPEQnQ0OXPWuiZl@cluster0.pdppllx.mongodb.net/meetups?retryWrites=true&w=majority&appName=Cluster0")
    const db = client.db("meetups")

    const meetupCollection = db.collection("meetups")

    const data = await meetupCollection.find({},{_id:1}).toArray()


    return {
        fallback:false,
        paths:data.map(meetup=>({params:{meetupId:meetup._id.toString()}}))
    }
}

export async function getStaticProps(context){

    const id = context.params.meetupId

    const client = await MongoClient.connect("mongodb+srv://ahmed:OUPEQnQ0OXPWuiZl@cluster0.pdppllx.mongodb.net/meetups?retryWrites=true&w=majority&appName=Cluster0")
    const db = client.db("meetups")

    const meetupCollection = db.collection("meetups")

    const newId = new ObjectId(id)

    const data = await meetupCollection.findOne({_id:newId})

    return {
        props:{
            meetUpData:{
                ...data,
                _id:"",
                id:data._id.toString()
            }
        }
    }
}