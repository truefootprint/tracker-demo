import Layout from "../layout";
import css from "./styles.scss";

const Thanks = ({ setPage }) => (
  <Layout>
    <div className={css.thanks}>
      <p className={css.title}>
        Thank you!
      </p>

      <p>Your entries have been stored.</p>
      <p>&nbsp;</p>
      <p>We have notified asset company XYZ you have made these submissions.</p>
      <p>&nbsp;</p>
      <p>Asset managers really like data that has been verified independently by an auditor. If you already have your annual report audited by a third party, please select the logo of yours and you can invite them to audit these numbers.</p>
    </div>
  </Layout>
);

export default Thanks;
