import Layout from "../layout";
import css from "./styles.scss";

const Thanks = ({ content, setPage }) => {
  const t = content.thanks;

  return (
    <Layout content={content} setPage={setPage}>
      <div className={css.thanks}>
        <p className={css.title}>{t.title}</p>

        <p>{t.para1}</p>
        <p>&nbsp;</p>
        <p>{t.para2}</p>
        <p>&nbsp;</p>
        <p>{t.para3}</p>

        <div className={css.images}>
          <img src={t.image1} />
          <img src={t.image2} />
          <img src={t.image3} />
          <img src={t.image4} />
        </div>
      </div>
    </Layout>
  );
};

export default Thanks;
