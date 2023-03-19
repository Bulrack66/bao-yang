import './Nav.scss'
import Link from 'next/link'

const Nav = () => {
    return (
        <div className='Nav'>
            <ul>
            <li>
                <Link href='/'>Accueil</Link>
            </li>
            <li>
                <Link href='/medecine'>Médecine Traditionnelle Chinoise</Link>
            </li>
            <li>
                <Link href='/massage'>Massage Bien-être</Link>
            </li>
            <li>
                <Link href='/formations'>Formations Stages</Link>
            </li>
            <li>
                <Link href='/contact'>Contact</Link>
            </li>
            <li>
                <Link href='/liens'>Liens</Link>
            </li>
            </ul>
        </div>
    );
}

export default Nav;