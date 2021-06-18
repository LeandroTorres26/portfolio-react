import styles from "./nav.module.scss";
import { NavLink } from "react-router-dom";
import logo from "../../image/logo-portfolio-min.svg";

const nav = () => {
  return (
    <>
      <NavLink activeClassName={styles.active} exact to="/">
        <img src={logo} className={styles.logo} alt="Logo Leandro Torres" />
      </NavLink>
      <ul className={styles.menu}>
        <NavLink activeClassName={styles.active} to="/projects">
          <li className={styles.menu__item}>Projects</li>
        </NavLink>
        <NavLink activeClassName={styles.active} to="/skills">
          <li className={styles.menu__item}>Skills</li>
        </NavLink>
        <NavLink activeClassName={styles.active} to="/about">
          <li className={styles.menu__item}>About</li>
        </NavLink>
        <NavLink activeClassName={styles.active} to="/contact">
          <li className={styles.menu__item}>Contact</li>
        </NavLink>
      </ul>
    </>
  );
};

export default nav;
