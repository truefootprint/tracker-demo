import Logo from "../logo";
import css from "./styles.scss";

const Header = ({ content }) => {
  const t = content.header;

  return (
    <div className={css.header}>
      <a className={css.logo} href=".">
        <Logo variant="stackedText" />
      </a>

      <p className={css.title}>{t.title}</p>

      <nav className={css.nav}>
        <a>{t.link1}</a>
        <a>{t.link2}</a>
      </nav>
    </div>
  );
};

export default Header;
