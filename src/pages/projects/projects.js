import styles from "./projects.module.scss";
import { motion } from "framer-motion";
import BoxProject from "../../components/Project/BoxProject";
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
    <motion.section className={styles.section} initial="out" animate="in" exit="out" variants={pageTransition}>
      <h1 className={styles.title}>Projects</h1>
      <BoxProject
        name="Meet Your Pet"
        desc="Adoption and Relationship website for pets with built-in text chat."
        img={myp}
        link="myp"
      />
      <BoxProject
        name="Delt"
        desc="A fictional clothes shop with a product filter using JSON."
        img={delt}
        link="delt"
      />
      <BoxProject
        name="Organic.io"
        desc="Searcher for fresh seasonal food in establishments near you."
        img={organic}
        link="organic"
      />
    </motion.section>
  );
};

export default Projects;
