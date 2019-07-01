import Layout from "../layout";
import Image from "../image";
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
          <Image src={t.image1} />
          <Image src={t.image2} />
          <Image src={t.image3} />
          <Image src={t.image4} />
        </div>
      </div>
    </Layout>
  );
};

export default Thanks;
