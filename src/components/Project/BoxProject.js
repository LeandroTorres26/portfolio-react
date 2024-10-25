import styles from "./BoxProject.module.scss";

const BoxProject = (props) => {
  return (
    <div className={styles.project} style={{ backgroundImage: `url(${props.img})` }}>
      <h2>{props.name}</h2>
      <p>{props.desc}</p>
      <a href={props.link} target="_blank" rel="noreferrer">visit</a>
      <ul>
        {props.stacks.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default BoxProject;
