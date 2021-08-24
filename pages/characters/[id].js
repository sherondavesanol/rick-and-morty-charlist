import Head from "next/head"

export const getStaticPaths = async () => {
    const res = await fetch('https://rickandmortyapi.com/api/character');
    const data = await res.json();


    const paths = data.results.map(char => {
        return {
            params: { id: char.id.toString() }
        }
    })

    return {
        paths,
        fallback: false
    }
};

export const getStaticProps = async (context) => {
    const id = context.params.id;

    const res = await fetch('https://rickandmortyapi.com/api/character/' + id);
    const data = await res.json();

    return {
        props: { char: data }
    }
};

const CharDetails = ({ char }) => {
    return ( 
        <>
            <Head >
                <title>Character List | { char.name }</title>
                <meta name="keywords" content="rick and morty" />
            </Head>
            
            <div>
                <img src={ char.image } alt="" />
                <h1>{ char.name }</h1>
                <p>Race: { char.species }</p>
                <p>Origin: { char.gender }</p>
                <p>Status: { char.status }</p>
            </div>

        </>
     );
};
 
export default CharDetails;