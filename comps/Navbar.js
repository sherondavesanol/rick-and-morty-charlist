import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
    return ( 
        <nav>
            <div className="logo">
                <Image src="/logo.png" width={ 200 } height={ 60 } alt=""/>
            </div>

            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/characters">Character List</Link>
        </nav>
     );
}
 
export default Navbar;