import styles from "./project.module.scss";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import desktop from "../../image/myp-desktop.jpg";
import mobile from "../../image/myp-mobile.jpg";
const pageTransition = {
  in: {
    opacity: 1,
    y: 0,
  },
  out: {
    opacity: 0,
    y: "-100%",
  },
};
const myp = () => {
  return (
    <motion.section className={styles.section} initial="out" animate="in" exit="out" variants={pageTransition}>
      <div className={styles.project}>
        <div className={styles.project__info}>
          <span className={styles.path}>
            <Link to="/projects">projects/</Link>
            <Link to="/projects/myp">meet your pet</Link>
          </span>
          <h1 className={styles.project__name}>Meet Your Pet</h1>
          <p className={styles.project__desc}>
            Developed in 2018 as a Term Paper for my technical degree at Etec Doutora Ruth Cardoso, the project was a
            relationship website (similar to Tinder) for pets. The user after logging into their account can search for
            a partner for their pets or adopt a new one. All conversations and negotiations on the website are made
            through a text chat.
          </p>
        </div>
        <img src={desktop} alt="a" className={styles.project__desktop} />
        <img src={mobile} alt="a" className={styles.project__mobile} />
      </div>
    </motion.section>
  );
};

export default myp;
