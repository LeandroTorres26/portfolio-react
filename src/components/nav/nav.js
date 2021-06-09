import styles from "./nav.module.scss";
import { Link } from "react-router-dom";
import logo from "../../image/logo-portfolio-min.svg";
const nav = () => {
  return (
    <nav>
      <Link to="/">
        <img src={logo} className={styles.logo} alt="Logo Leandro Torres" />
      </Link>
      <ul className={styles.menu}>
        <Link to="/projects">
          <li className={styles.menu__item}>Projects</li>
        </Link>
        <Link to="/skills">
          <li className={styles.menu__item}>Skills</li>
        </Link>
        <Link to="/about">
          <li className={styles.menu__item}>About</li>
        </Link>
        <Link to="/contact">
          <li className={styles.menu__item}>Contact</li>
        </Link>
      </ul>
    </nav>
  );
};

export default nav;
