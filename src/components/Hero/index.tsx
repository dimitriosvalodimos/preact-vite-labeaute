import { Rule } from "../ui/Rule";
import img from "../../assets/images/front_compressed_large.jpeg";
import s from "./Hero.module.css";

const Hero = () => {
    return (
        <div className={s.wrapper} id="hero">
            <img className={s.image} src={img} />
            <div className={s.text}>
                <h2 className={s.company}>LA BEAUTÉ</h2>
                <p>Kosmetik und Wellness</p>
                <p>Katrin Bienk · Michaela Kaminski</p>
                <Rule marginY="1rem" />
                <p>
                    Unsere Fachkenntnis und Erfahrung bringen Ihre äußere und
                    innere Schönheit in Einklang. Um ein optimales Resultat und
                    die gewünschte Nachhaltigkeit zu erreichen, werden die
                    Behandlungen und Produkte auf die Bedürfnisse Ihrer Haut
                    abgestimmt.
                </p>
            </div>
        </div>
    );
};

export default Hero;
