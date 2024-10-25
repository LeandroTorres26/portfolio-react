import styles from "./skills.module.scss";
import { motion } from "framer-motion";
import images from '../../components/ImageLoader/imageLoader';

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
  const imageWidth = 110;
  const imageHeight = 110;
  return (
    <motion.section className={styles.section} initial="out" animate="in" exit="out" variants={pageTransition}>
      <h1 className={styles.title}>stacks I have most experience with</h1>
      <ul>
        <li><img src={images.icon_html} alt="The logo icon for HTML5" title="HTML5" width={imageWidth} height={imageHeight}/></li>
        <li><img src={images.icon_css} alt="The logo icon for CSS3" title="CSS3" width={imageWidth} height={imageHeight}/></li>
        <li><img src={images.icon_javascript} alt="The logo icon for JavaScript" title="JavaScript" width={imageWidth} height={imageHeight}/></li>
        <li><img src={images.icon_jquery} alt="The logo icon for jQuery" title="jQuery" width={imageWidth} height={imageHeight}/></li>
        <li><img src={images.icon_react} alt="The logo icon for React" title="React" width={imageWidth} height={imageHeight}/></li>
        <li><img src={images.icon_typescript} alt="The logo icon for TypeScript" title="TypeScript" width={imageWidth} height={imageHeight}/></li>
        <li><img src={images.icon_next} alt="The logo icon for Next.js" title="Next.js" width={imageWidth} height={imageHeight}/></li>
        <li><img src={images.icon_sass} alt="The logo icon for Sass" title="Sass" width={imageWidth} height={imageHeight}/></li>
        <li><img src={images.icon_tailwind} alt="The logo icon for Tailwind" title="Tailwind" width={imageWidth} height={imageHeight}/></li>
        <li><img src={images.icon_git} alt="The logo icon for Git" title="Git" width={imageWidth} height={imageHeight}/></li>
        <li><img src={images.icon_github} alt="The logo icon for GitHub" title="Github" width={imageWidth} height={imageHeight}/></li>
        <li><img src={images.icon_gulp} alt="The logo icon for Gulp" title="Gulp" width={imageWidth} height={imageHeight}/></li>
        <li><img src={images.icon_npm} alt="The logo icon for NPM" title="NPM" width={imageWidth} height={imageHeight}/></li>
        <li><img src={images.icon_ajax} alt="The logo icon for Ajax" title="Ajax" width={imageWidth} height={imageHeight}/></li>
        <li><img src={images.icon_vtex} alt="The logo icon for VTEX" title="VTEX" width={imageWidth} height={imageHeight}/></li>
        <li><img src={images.icon_deco} alt="The logo icon for Deco.cx" title="Deco.cx" width={imageWidth} height={imageHeight}/></li>
        <li><img src={images.icon_figma} alt="The logo icon for Figma" title="Figma" width={imageWidth} height={imageHeight}/></li>
      </ul>
      <h2>also used before</h2>
      <ul>
        <li><img src={images.icon_php} alt="The logo icon for PHP" title="PHP" width={imageWidth} height={imageHeight}/></li>
        <li><img src={images.icon_wordpress} alt="The logo icon for Wordpress" title="Wordpress" width={imageWidth} height={imageHeight}/></li>
        <li><img src={images.icon_vue} alt="The logo icon for Vue.js" title="Vue.js" width={imageWidth} height={imageHeight}/></li>
        <li><img src={images.icon_threejs} alt="The logo icon for Three.js" title="Three.js" width={imageWidth} height={imageHeight}/></li>
      </ul>
    </motion.section>
  );
};

export default Skills;
