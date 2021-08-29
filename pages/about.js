import Head from "next/head";
import styles from '../styles/Home.module.css'
import Footer from "../comps/Footer";
import Navbar from "../comps/Navbar";

const About = () => {
    return (  
        <>
            <div>
            <Head >
                <title>Rick and Morty | About</title>
                <meta name="keywords" content="rick and morty" />
            </Head>

                <h1 className={styles.title}>About</h1>
                <p className={styles.text}>Rick and Morty, a science-fiction, dark comedy series about genius inventor, Rick Sanchez, and his naive grandson, Morty Smith. The American animated television show is created by Justin Roiland and Dan Harmon. It premiered on Cartoon Network&apos;s Adult Swim block on December 2, 2013.</p>

            </div>
        </>
    );
}
 
export default About;