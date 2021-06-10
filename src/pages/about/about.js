import styles from "./about.module.scss";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import leandro from "../../image/minha-foto.jpg";
import linkedin from "../../image/linkedin.svg";
import github from "../../image/github.svg";
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
const About = () => {
  return (
    <motion.section initial="out" animate="in" exit="out" variants={pageTransition}>
      <h1>About me</h1>
      <figure>
        <img src={leandro} alt="Foto do Leandro Torres" className={styles.about__img} />
        <figcaption className={styles.about__caption}>Me in a trip to the country side of São Paulo, Brazil</figcaption>
      </figure>
      <p className={styles.about__text}>
        Started in programming in 2017 with Javascript, then 3 months later I decided to do an IT Technician Course in
        Etec (A big technical school) to improve myself as a developer, there I learned some SQL, Back-End (Java, C#,
        C++) and Front-End (HTML, CSS, Javascript). In my last year there (2018) I and my colleagues developed a website
        as our term paper (<Link to="/projects/myp">Meet Your Pet</Link>) and I had to do some online classes in UI and
        UX to improve the design of the project.
      </p>
      <p className={styles.about__text}>
        After graduating I decided to do an exchange program in 2020 to Ireland so I continued with my studies in
        Front-End Development and learned how to use new tools (Sass, Compass, Jquery) while I prepared everything about
        the exchange program. Then 2020 came and I went to Ireland but had to come back 1 month later (instead of 8
        months) due to Covid-19, so back in Brazil I resumed my studies in web development with ReactJs, NextJs, and
        JSON.
      </p>
      <p className={styles.about__text}>
        In 2021 I decided that it was time to start my professional career as a Front-End Developer, so I am currently
        looking for an opportunity while I hone my skills in UX and Development doing some fake projects.
      </p>
      <h2 className={styles.social}>Social Media</h2>
      <ul className={styles.icons}>
        <li>
          <a href="https://www.linkedin.com/in/leandro-torres-front-end/" target="_blank" rel="noreferrer">
            <img src={linkedin} alt="Ícone do LinkedIn" />
          </a>
        </li>
        <li>
          <a href="https://github.com/LeandroTorres26" target="_blank" rel="noreferrer">
            <img src={github} alt="Ícone do GitHub" />
          </a>
        </li>
      </ul>
    </motion.section>
  );
};

export default About;
