import s from "./Hero.module.css";
import img from "../../assets/images/front_compressed_large.jpeg";

const Hero = () => {
  return (
    <div className={s.container}>
      <div className={s.textContainer}>
        <h2 className={s.company}>LA BEAUTÉ</h2>
        <p className={s.slogan}>Kosmetik und Wellness</p>
        <p className={s.owners}>Katrin Bienk · Michaela Kaminski</p>
        <hr className={s.hr} />
        <p className={s.pitch}>
          Unsere Fachkenntnis und Erfahrung bringen Ihre äußere und innere
          Schönheit in Einklang. Um ein optimales Resultat und die gewünschte
          Nachhaltigkeit zu erreichen, werden die Behandlungen und Produkte auf
          die Bedürfnisse Ihrer Haut abgestimmt.
        </p>
      </div>
    </div>
  );
};

export default Hero;
