import Layout from "../layout";
import css from "./styles.scss";

const Intro = ({ content, setPage }) => {
  const t = content.intro;

  return <Layout>
    <div className={css.intro}>
      <p>{t.para1}</p>
      <p>&nbsp;</p>
      <p>{t.para2}</p>
      <p>{t.para3}</p>
      <p>{t.para4}</p>
      <p>&nbsp;</p>
      <p>{t.para5}</p>

      <a className={css.call_to_action} onClick={() => setPage("login")}>{t.cta}</a>
    </div>
  </Layout>;
};

export default Intro;
