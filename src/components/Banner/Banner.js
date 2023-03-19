import Image from 'next/image'
import bonsai from '../../../public/bonsai-square.webp'
import './Banner.css'
const Banner = () => {
    return (
        <div className='Banner'>
            <Image
            src={bonsai}
            alt='Bonsai'
            width={125}
            className='bonsai'
            />
            <div className="banner-box">
                <h1>Centre Bao Yang</h1>
                <p>Médecine Traditionnelle Chinoise Massage de Bien-être et Formation</p>
            </div>
        </div>
    );
}

export default Banner;