import styles from "./projects.module.scss";
import { motion } from "framer-motion";
import Pbutton from "../../components/ProjectButton/ProjectButton";
import myp from "../../image/myp-logo.svg";
import delt from "../../image/delt-logo.svg";
import organic from "../../image/organic-logo.svg";
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
const Projects = () => {
  return (
    <motion.section className={styles.projects} initial="out" animate="in" exit="out" variants={pageTransition}>
      <h1 className={styles.projects__title}>Projects</h1>
      <div className={styles.project} style={{ backgroundImage: `url(${myp})` }}>
        <div className={styles.project__info}>
          <h2 className={styles.project__name}>Meet Your Pet</h2>
          <p className={styles.project__desc}>Adoption and Relationship website for pets with built-in text chat.</p>
          <Pbutton text="Read More" link="/myp" />
        </div>
      </div>
      <div className={styles.project} style={{ backgroundImage: `url(${delt})` }}>
        <div className={styles.project__info}>
          <h2 className={styles.project__name}>Delt</h2>
          <p className={styles.project__desc}>A fictional clothes shop with a product filter using JSON.</p>
          <Pbutton text="Read More" link="/delt" />
        </div>
      </div>
      <div className={styles.project} style={{ backgroundImage: `url(${organic})` }}>
        <div className={styles.project__info}>
          <h2 className={styles.project__name}>Organic.io</h2>
          <p className={styles.project__desc}>Searcher for fresh seasonal food in establishments near you.</p>
          <Pbutton text="Read More" link="/organic" />
        </div>
      </div>
    </motion.section>
  );
};

export default Projects;
