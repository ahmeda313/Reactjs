import Link from "next/link"

export default function Newspage(){
    return(
        <>
        <h1>This is News page</h1>
        <ul>
            <li>
                <Link href="/news/nextJs">Nextjs news</Link>
            </li>
        </ul>
        </>
    )
}