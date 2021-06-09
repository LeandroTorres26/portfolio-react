import styles from "./project.module.scss";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import desktop from "../../image/delt-desktop.jpg";
import mobile from "../../image/delt-mobile.jpg";
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
const delt = () => {
  return (
    <motion.section initial="out" animate="in" exit="out" variants={pageTransition}>
      <span className={styles.path}>
        <Link to="/projects">projects/</Link>
        <Link to="/projects/myp">delt</Link>
      </span>
      <div className={styles.project}>
        <h1 className={styles.project__name}>Delt</h1>
        <p className={styles.project__desc}>
          Delt is a fictional clothes shop developed for a selection process of a tech company. I had to replicate the
          design they sent me and filter the products by color, size, and price using JSON (which by the time I didn't
          know how to use and had to learn it in one day).
        </p>
        <img src={desktop} alt="a" className={styles.project__desktop} />
        <img src={mobile} alt="a" className={styles.project__mobile} />
      </div>
    </motion.section>
  );
};

export default delt;
