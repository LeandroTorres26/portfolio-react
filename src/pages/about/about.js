import { motion } from "framer-motion";
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
      <h1>About</h1>
    </motion.section>
  );
};

export default About;
