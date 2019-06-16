import { useState } from "react";
import Layout from "../layout";
import css from "./styles.scss";

const Form = ({ content, setPage }) => {
  const [section, setSection] = useState(0);
  const t = content.form[section];

  const submit = () => {
    if (section + 1 < content.form.length) {
      window.scrollTo(0, 0);
      setSection(section + 1);
    } else {
      setPage("thanks");
    }
  };

  return (
    <Layout content={content}>
      <div className={css.form}>
        <p className={css.title}>{t.title}</p>
        <p className={css.intro}>{t.intro}</p>


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
