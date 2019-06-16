import Layout from "../layout";
import css from "./styles.scss";

const Login = ({ content, setPage }) => {
  const t = content.login;

  return (
    <Layout content={content}>
      <div className={css.login}>
        <p className={css.title}>
          Create first login
        </p>

        <p>Multiple people at G1 can have logins. You can create the first one now for yourself.</p>

        <div className={css.field}>
          <label>{t.label1}</label>
          <input type="text" value={t.value1} placeholder={t.place1} />
        </div>

        <div className={css.field}>
          <label>{t.label2}</label>
          <input type="text" value={t.value2} placeholder={t.place2} />
        </div>

        <div className={css.field}>
          <label>{t.label3}</label>
          <input type="password" value={t.value3} placeholder={t.place3} autocomplete="new-password" />
        </div>

        <div className={css.field}>
          <label></label>
          <a className={css.call_to_action} onClick={() => setPage("form")}>{t.cta}</a>
        </div>
      </div>
    </Layout>
  );
};

export default Login;
