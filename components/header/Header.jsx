import Logo from "../logo";
import css from "./styles.scss";

const Header = () => (
  <div className={css.header}>
    <a className={css.logo} href=".">
      <Logo variant="stackedText" />
    </a>

    <p className={css.title}>
      TrueFootprint Tracker
    </p>

    <nav className={css.nav}>
      <a>My account</a>
      <a>Help</a>
    </nav>
  </div>
);

export default Header;
