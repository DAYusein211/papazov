import Image from 'next/image'
import Link from 'next/link'
import logo from '../../public/logo.png'
import style from '../styles/Home.module.css'
export default function Navbar()
{
    return (
    <>
        <div className = {style.nav}>
            <Link href ="/">
                <Image alt = "logo" src = {logo} width = "50" className = {style.image} />
            </Link>
        </div>
    </>
    )
}