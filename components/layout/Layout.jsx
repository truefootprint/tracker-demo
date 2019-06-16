import css from "./styles.scss";

const Layout = ({ children }) => <>
  <p className={css.hello}>Hello from Layout</p>

  {children}
</>;

export default Layout;
