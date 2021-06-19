import styles from "./skills.module.scss";
import { motion } from "framer-motion";
import ux from "../../image/ux-design.svg";
import frontend from "../../image/front-end.svg";
import responsive from "../../image/responsive.svg";

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

const Skills = () => {
  return (
    <motion.section className={styles.section} initial="out" animate="in" exit="out" variants={pageTransition}>
      <h1 className={styles.title}>Skills</h1>
      <div className={styles.skill}>
        <img src={ux} alt="Icone de User Experience" className={styles.skill__icon} />
        <h2 className={styles.skill__name}>UX Design</h2>
        <p className={styles.skill__desc}>Interfaces planned using User Interface and User Experience concepts</p>
        <h3 className={styles.skill__subtitle}>Tools I use</h3>
        <ul className={styles.skill__tools}>
          <li>Figma</li>
          <li>Adobe XD</li>
          <li>Adobe Photoshop</li>
          <li>Adobe Illustrator</li>
        </ul>
      </div>
      <div className={styles.skill}>
        <img src={frontend} alt="Icone de User Experience" className={styles.skill__icon} />
        <h2 className={styles.skill__name}>Front-End Development</h2>
        <p className={styles.skill__desc}>Modern web development using the latest market tools</p>
        <h3 className={styles.skill__subtitle}>Technologies</h3>
        <ul className={styles.skill__tools}>
          <li>CSS</li>
          <li>Javascript</li>
          <li>React</li>
          <li>Sass</li>
        </ul>
      </div>
      <div className={styles.skill}>
        <img
          src={responsive}
          alt="Icone de User Experience"
          className={styles.skill__icon}
          style={{ marginBottom: "1em" }}
        />
        <h2 className={styles.skill__name}>Responsivity and Accessibility</h2>
        <p className={styles.skill__desc}>Sites that adapt to the device and accessible for PwD</p>
        <h3 className={styles.skill__subtitle}>How I do it</h3>
        <ul className={styles.skill__tools}>
          <li>Media Queries</li>
          <li>Responsive Units</li>
          <li>Semantic Tags</li>
          <li>Screen Readers</li>
        </ul>
      </div>
    </motion.section>
  );
};

export default Skills;
