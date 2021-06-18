import styles from "./BoxProject.module.scss";
import Pbutton from "./ProjectButton/ProjectButton";

const BoxProject = (props) => {
  return (
    <div className={styles.project} style={{ backgroundImage: `url(${props.img})` }}>
      <div className={styles.project__info}>
        <h2 className={styles.project__name}>{props.name}</h2>
        <p className={styles.project__desc}>{props.desc}</p>
        <Pbutton text="Read More" link={"/" + props.link} />
      </div>
    </div>
  );
};

export default BoxProject;
