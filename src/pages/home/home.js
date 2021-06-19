import styles from "./home.module.scss";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
const pageTransition = {
  in: {
    opacity: 1,
    x: 0,
  },
  out: {
    opacity: 0,
    x: "-100%",
  },
};

const Home = () => {
  return (
    <motion.section className={styles.section} initial="out" animate="in" exit="out" variants={pageTransition}>
      <div>
        <h1 className={styles.home__title}>creating enjoyable experiences</h1>
        <h2 className={styles.home__subtitle}>Leandro Torres, Front-End Developer</h2>
      </div>
      <Link to="/projects">
        <button className={styles.home__cta}>Check it out!</button>
      </Link>
    </motion.section>
  );
};

export default Home;
