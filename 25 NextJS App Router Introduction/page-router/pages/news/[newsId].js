import { useRouter } from "next/router"

export default function Detailspage(){
    const router = useRouter()
    return(
        <h1>This is {router.query.newsId} page</h1>
    )
}