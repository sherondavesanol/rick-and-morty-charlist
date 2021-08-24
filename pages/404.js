import Link from "next/link"
import Head from "next/head"
import { useEffect } from "react"
import { useRouter } from "next/router"

const NotFound = () => {
    const router = useRouter();

    useEffect(() => {

        setTimeout(() => {
            // router.go(-1); go backward 1 page
            // router.go(1); go forward 1 page

            router.push('/');
        }, 3000)

    }, [])

    return ( 
        <>
            <Head >
                <title>Rick and Morty | 404</title>
                <meta name="keywords" content="rick and morty" />
            </Head>

            <div className="not-found">
                <h1>Oooops...</h1>
                <h2>That page cannot be found.</h2>
                <p>Go back to <Link href="/"><a>home</a></Link>.</p>
            </div>

        </>
     );
}
 
export default NotFound;