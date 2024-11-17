import { useRouter } from "next/router"
import NewMeetupForm from "../../components/meetups/NewMeetupForm"
import Head from "next/head";


export default function NewMeetUp(){
    const router = useRouter()

    async function submitMeetup(val){

        const response = await fetch("/api/new-meetup",{
            method:"POST",
            body:JSON.stringify(val),
            headers:{
                "Content-Type":"application/json"
            }
        })

        const data = await response.json()
        console.log(data)

        router.push("/")

    }

    return(
        <>
        <Head>
            <title>Create meetups</title>
            <meta title="Add meetup" content="add meetup and let people take part"/>
        </Head>
        <NewMeetupForm onAddMeetup={submitMeetup}/>
        </>
    )
}