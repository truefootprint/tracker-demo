import Layout from "../layout";
import css from "./styles.scss";

const Login = () => (
  <Layout>
    <div className={css.login}>
      <p className={css.title}>
        Create first login
      </p>

      <p>Multiple people at G1 can have logins. You can create the first one now for yourself.</p>

      <div className={css.field}>
        <label>Company name:</label>
        <input type="text" value="G1" />
      </div>

      <div className={css.field}>
        <label>Email address:</label>
        <input type="text" placeholder="for example janedoe@g1.com" />
      </div>

      <div className={css.field}>
        <label>Create password:</label>
        <input type="password" autocomplete="new-password" />
      </div>

      <div className={css.field}>
        <label></label>
        <a className={css.call_to_action}>Create login</a>
      </div>
    </div>
  </Layout>
);

export default Login;
