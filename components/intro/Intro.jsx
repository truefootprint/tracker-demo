import Layout from "../layout";
import css from "./styles.scss";

const Intro = ({ content, setPage }) => {
  const t = content.intro;

  return <Layout content={content}>
    <div className={css.intro}>
      <p dangerouslySetInnerHTML={{__html: t.para1}}></p>
      <p>&nbsp;</p>
      <p dangerouslySetInnerHTML={{__html: t.para2}}></p>
      <p dangerouslySetInnerHTML={{__html: t.para3}}></p>
      <p dangerouslySetInnerHTML={{__html: t.para4}}></p>
      <p>&nbsp;</p>
      <p dangerouslySetInnerHTML={{__html: t.para5}}></p>

      <a className={css.call_to_action} onClick={() => setPage("login")}>{t.cta}</a>
    </div>
  </Layout>;
};

export default Intro;
