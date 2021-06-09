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
    <motion.section className={styles.home} initial="out" animate="in" exit="out" variants={pageTransition}>
      <h1 className={styles.home__title}>Creating enjoyable experiences</h1>
      <Link to="/projects">
        <button className={styles.home__cta}>Check it out!</button>
      </Link>
    </motion.section>
  );
};

export default Home;
