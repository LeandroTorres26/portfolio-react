import styles from "./work.module.scss";
import { motion } from "framer-motion";
import React, {useState} from "react";

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

const Job = () => {
  const [toggle, setToggle] = useState(true);

  const handleClick = () => {
    setToggle(!toggle);
  };

  const open = toggle ? styles.open : '';

  return (
    <article className={`${styles.job} ${open}`} onClick={handleClick}>
      <h2>Front-End Developer</h2>
      <h3>N1.AG</h3>
      <p className={styles.location}>remote</p>
      <time dateTime="2021-08/2024-04" className={styles.period}>aug 2021 - apr 2024</time>
      <time dateTime="P2Y6M" className={styles.years}>2 years and 6 months</time>
      <div className={styles.description}>
        <p>
          Support and maintenance for ecommerces on VTEX and Deco. New featrues, SEO, Analytics and acessibilty for legacy on VTEX CMS (jQuery and Gulp) and modern stores on VTEX IO and Deco.cx (React and TypeScript).
        </p>
        <ul>
          <li>JavaScript</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>React</li>
          <li>jQuery</li>
          <li>Sass</li>
          <li>TypeScript</li>
          <li>Tailwind</li>
          <li>Next.js</li>
          <li>VTEX</li>
          <li>Deco.cx</li>
          <li>Gulp</li>
          <li>Rest</li>
          <li>Ajax</li>
        </ul>
      </div>
    </article>
  )
}

const Work = () => {
  return (
    <motion.section className={styles.section} initial="out" animate="in" exit="out" variants={pageTransition}>
      <Job/>
      <a href="https://www.linkedin.com/in/leandro-torres-front-end/" target="_blank" className={styles.newJob}>add to the list</a>
    </motion.section>
  );
};

export default Work;
