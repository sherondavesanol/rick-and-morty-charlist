import Head from "next/head"
import Link from "next/link"
import styles from '../../styles/Characters.module.css'

export const getStaticProps = async() => {

    const res = await fetch('https://rickandmortyapi.com/api/character');
    const data = await res.json();

    return {
        props: { data: data }
    }
};

const Characters = ({ data }) => {
    return ( 
        <>
            <Head >
                <title>Rick and Morty | Chracters</title>
                <meta name="keywords" content="rick and morty" />
            </Head>

            <div>
                <h1 className={styles.h1}>Character List</h1>
                
                <div className={ styles.card }>

                    { data.results.map(char => (

                        <Link 
                            href={/characters/ + char.id} 
                            key={ char.id }
                        >
                            <a 
                            style={{backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.75), transparent 50%), url(${char.image})`}} 
                            className={styles.single}>
                                <h3>{char.name}</h3>
                            </a>
                        </Link>
                        ))
                    }                 

                </div>
            </div>
        </>
    );
}

export default Characters;