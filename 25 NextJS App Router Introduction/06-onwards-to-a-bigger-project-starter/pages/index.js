import { MongoClient } from "mongodb"
import Head from "next/head";

import MeetupList from "../components/meetups/MeetupList"


export default function HomePage(props){
    return(
        <>
        <Head>
            <title>React meetups</title>
            <meta title="React meetups" content="Take part and build network"/>
        </Head>
        <MeetupList meetups={props.meetups}/>
        </>
    )
}


// export async function getServerSideProps(context){ // this is run on every request
//     const req = context.req
//     const res = context.res
//     return {
//         props:{
//             meetups:DUMMY_MEETUPS
//         }
//     }
// }

export async function getStaticProps(){ // this is run on evry build
    
    const client  = await MongoClient.connect("mongodb+srv://ahmed:OUPEQnQ0OXPWuiZl@cluster0.pdppllx.mongodb.net/meetups?retryWrites=true&w=majority&appName=Cluster0")
    const db = client.db("meetups")

    const meetupCollection = db.collection("meetups")

    const data = await meetupCollection.find().toArray()

    client.close()

    return {
        props:{
            meetups:data.map(meetup=>({
                title:meetup.title,
                image:meetup.image,
                address:meetup.address,
                id:meetup._id.toString()
            }))
        },
        revalidate:10 // in seconds, data above can be outdated so it is neccessary to rebuild
    }
}