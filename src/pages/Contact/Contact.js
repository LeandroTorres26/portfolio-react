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
const Contact = () => {
  return (
    <motion.section className={"contact"} initial="out" animate="in" exit="out" variants={pageTransition}>
      <h1>Contact</h1>
    </motion.section>
  );
};

export default Contact;
