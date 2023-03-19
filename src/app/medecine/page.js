import Banner from "@/components/Banner/Banner";
import Nav from '@/components/Nav/Nav';

const medecine = () => {
    return (
        <div>
            <Banner/>
            <Nav/>
            <p>La Médecine Chinoise est une médecine très ancienne, ses racines remontent à plus de 4000 ans. Depuis elle n'a cessé d'évoluer et d'être améliorée et c'est la seule médecine ancestrale qui continue d'être massivement pratiquée aujourd'hui dans le monde. </p>
            <p>Ses conceptions, très différentes de la médecine occidentale, reposent sur le concept que l'Homme est un élément du cosmos placé entre Terre et Ciel.</p>
            <p>Le Ciel lui apporte, par la respiration, l'énergie de l'air. La Terre lui apporte, par l'alimentation, les substances nécessaires à sa structure et à son entretien. Par ses parents il reçoit l'énergie vitale.</p>
            <p>Toutes ces énergies sont regroupées sous le concept de Qi (tchi). C'est pourquoi la Médecine Traditionnelle Chinoise est aussi appelée médecine énergétique.</p>
            <p>Elle considère également l'Homme comme un tout où les différentes parties du corps interagissent entre elles et où les aspects physiques et mentaux interagissent également entre eux.</p>
            <p>Ainsi, les problèmes de santé ou les maladies proviennent de leur déséquilibre.</p>
            <h3>La Médecine Traditionnelle Chinoise possède plusieurs techniques thérapeutiques :</h3>
            <ul>
                <li>la Pharmacopée qui utilise des substances issues du végétal, du minéral, de l'animal (très peu aujourd'hui par respect de la biodiversité).</li>
                <li>l'Acupuncture qui consiste a insérer de fines aiguilles sur des points précis du corps.</li>
                <li>le massage, appelé Tuina.</li>
                <li>la diététique qui s'appuie sur les mêmes principes que la Pharmacopée en utilisant les propriétés des aliments.</li>
                <li>les exercices physiques comme le QiGong ou le TaiJiQuan.</li>
                <li>l'hygiène de vie et le respect des rythmes naturels.</li>
            </ul>
            <p>.Le praticien, après avoir établi le bilan énergétique du patient va appliquer l'une ou l'autre de ces techniques pour restaurer l'équilibre perdu.</p>
            <p>Selon la Tradition : « attendre d'être malade pour se soigner c'est comme attendre d'avoir soif pour creuser un puits. »</p>

        </div>
    );
}

export default medecine;