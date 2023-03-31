import Layout from "@/components/Layout"
import Link from "next/link"

export default function NotFound(){
    return(
        <Layout>
        <div className="notfound">
            <h1 className="FOF">4<span className="green">0</span>4</h1>
            <h1>Ooooops!</h1>
            <p>You are lost.</p>
            <p>This page could not be found.</p>
            <p>Go back to <Link href="/">Homepage</Link></p>
        </div>
        </Layout>
    )
}