import Layout from "../layout";
import css from "./styles.scss";

const Intro = () => (
  <Layout>
    <div className={css.intro}>
      <p>Hello G1,</p>
      <p>&nbsp;</p>
      <p>Asset manager XYZ invited you to provide them with outcome numbers using the TrueFootprint Tracker.</p>
      <p>Read more <a>here</a> about why asset managers want to have this data.</p>
      <p>The data you enter is yours. By submitting you give us a license to sell this data to XYZ and others. Read <a>here</a> the full T&C.</p>
      <p>&nbsp;</p>
      <p>We have already created a basic company profile for you based on data provided by XYZ.</p>

      <a className={css.call_to_action}>Start</a>
    </div>
  </Layout>
);

export default Intro;
