import styles from "./projects.module.scss";
import { motion } from "framer-motion";
import BoxProject from "../../components/Project/BoxProject";
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
      <h2>Personal Projects</h2>
      <BoxProject
        name="Smart Recipe"
        desc="AI-powered recipe generator using Gemini and Vue."
        link="https://ai-smart-recipe.vercel.app/"
        stacks={["Vue.js", "Typescript", "Gemini AI", "CSS"]}
      />
      <h2>Also contributed</h2>
      <BoxProject
        name="Technos Group"
        desc="Ecommerces (Tecnhos, Euro Relogios, Fossil, Timecenter) for a watch Brand using VTEX."
        link="https://www.technos.com.br/"
        stacks={["Vtex", "Deco.cx", "JavaScript", "JQuery", "Sass", "Google Tag Manager", "Google Analytics"]}
      />
      <BoxProject
        name="IRL Sports"
        desc="Project that aims to revolutionize sport through nft."
        link="https://www.irlsports.io/en"
        stacks={["React", "Next.js", "TypeScript", "Sass"]}
      />
      <BoxProject
        name="Lojas MM"
        desc="Ecommerce for a Retail Store using VTEX."
        link="https://www.lojasmm.com/"
        stacks={["VTEX", "React", "Next.js", "TypeScript", "Sass"]}
      />
    </motion.section>
  );
};

export default Projects;
