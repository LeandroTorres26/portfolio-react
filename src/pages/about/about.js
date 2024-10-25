import styles from "./about.module.scss";
import { motion } from "framer-motion";
import leandro from "../../image/minha-foto.webp";
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
    <motion.section className={styles.section} initial="out" animate="in" exit="out" variants={pageTransition}>
      <h1 className={styles.title}>About me</h1>
      <img src={leandro} alt="Foto do Leandro Torres" className={styles.about__img} />
      <p className={styles.about__text}>
        My name is Leandro Torres, a brazilian Front-End professional accustomed to solving problems, seeking new challenges as a Front-End developer or Software Engineer.
      </p>
      <p className={styles.about__text}>
        I started studying programming in high school and have an IT degree similar to an associate's degree in Etec, which is one of Brazil's most prominent technical schools, there I learned the basics of Front-End, Back-End, and databases. I further honed my skills through paid courses, YouTube, forums, and developing projects.
      </p>
      <p className={styles.about__text}>
        Worked for 2 years and 6 months in an ecommerce agency, where I implemented new pages, functionalities and improved SEO and accessibility, using jQuery, Sass and Gulp on legacy projects and React, Typescript, Next.js and Tailwind on new projects. The repositories were all on Bitbucket and all the tasks given by Trello.
      </p>
      <p className={styles.about__text}>
        I thrive on hands-on learning and am adept at teaching myself new skills, I'm adept at effectively communicating technical issues to non-developers, and I'm proactive in identifying areas for improvement. While I prefer working independently, I'm also comfortable collaborating with a team.
      </p>
      <div className={styles.social}>
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
      </div>
    </motion.section>
  );
};

export default About;
