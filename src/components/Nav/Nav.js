import styles from "./nav.module.scss";
import { NavLink } from "react-router-dom";
import logo from "../../image/logo-portfolio-min.svg";

const nav = () => {
  return (
    <>
      <ul className={styles.topbar}>
        <li>
          <NavLink exact to="/">
            <img src={logo} className={styles.logo} alt="Logo Leandro Torres" />
          </NavLink>
        </li>
      </ul>
      <ul className={styles.menu}>
        <li>
          <NavLink className={styles.menu__item} activeClassName={styles.active} to="/skills">
            Skills
          </NavLink>
        </li>
        <li>
          <NavLink className={styles.menu__item} activeClassName={styles.active} to="/work">
            Career
          </NavLink>
        </li>
        <li>
          <NavLink className={styles.menu__item} activeClassName={styles.active} to="/projects">
            Projects
          </NavLink>
        </li>
        <li>
          <NavLink className={styles.menu__item} activeClassName={styles.active} to="/about">
            About
          </NavLink>
        </li>
      </ul>
    </>
  );
};

export default nav;
