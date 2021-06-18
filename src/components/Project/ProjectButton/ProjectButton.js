import styles from "./projectbutton.module.scss";
import { Link } from "react-router-dom";

const ProjectButton = (props) => {
  return (
    <Link to={"/projects" + props.link}>
      <button className={styles.Pbutton}>{props.text}</button>
    </Link>
  );
};

export default ProjectButton;
