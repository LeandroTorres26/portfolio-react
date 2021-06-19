import styles from "./project.module.scss";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import desktop from "../../image/organic-desktop.jpg";
import mobile from "../../image/organic-mobile.jpg";
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
const organic = () => {
  return (
    <motion.section className={styles.section} initial="out" animate="in" exit="out" variants={pageTransition}>
      <div className={styles.project}>
        <div className={styles.project__info}>
          <span className={styles.path}>
            <Link to="/projects">projects/</Link>
            <Link to="/projects/myp">organic.io</Link>
          </span>

          <h1 className={styles.project__name}>Organic.io</h1>
          <p className={styles.project__desc}>
            Organic.io was a UI that I created as practice for my UX skills that was later developed as a website. The
            idea was a website where you could search for fresh seasonal food near your location.
          </p>
        </div>
        <img src={desktop} alt="a" className={styles.project__desktop} />
        <img src={mobile} alt="a" className={styles.project__mobile} />
      </div>
    </motion.section>
  );
};

export default organic;
