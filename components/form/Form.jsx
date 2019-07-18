import { useState } from "react";
import Layout from "../layout";
import css from "./styles.scss";

const Form = ({ content, setPage, framework }) => {
  const [section, setSection] = useState(0);

  const form = content[`${framework}_form`];
  const t = form[section];

  const submit = () => {
    if (section + 1 < form.length) {
      window.scrollTo(0, 0);
      setSection(section + 1);
    } else {
      setPage("thanks");
    }
  };

  const goal = (src) => {
    const number = src.split("/")[1].split("-")[0];

    return `https://sustainabledevelopment.un.org/sdg${number}`
  };

  return (
    <Layout content={content} setPage={setPage}>
      <div className={css.form}>
        <p className={css.title}>{t.title}</p>
        <p className={css.intro}>{t.intro}</p>

        <div className={`${css.icons} ${t.icons.length > 4 && css.full_width}`}>
            {t.icons.map(src => (
              <a key={src} href={goal(src)} target="_blank"><img src={src} /></a>
            ))}
        </div>

        {t.questions.map((question, index) => (
          <div key={`section-${section}-question-${index}`}>
            <div className={css.field}>
              <label>{question}</label>
              <input type="text" />
            </div>

            <div className={css.field}>
              <label>{t.secondary[index]}</label>
              <input type="text" />
            </div>

            <div className={css.spacer}></div>
          </div>
        ))}


        <div className={css.field}>
          <label></label>
          <a className={css.call_to_action} onClick={submit}>{t.cta}</a>
        </div>
      </div>
    </Layout>
  );
};

export default Form;
