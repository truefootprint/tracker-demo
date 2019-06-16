import Layout from "../layout";
import css from "./styles.scss";

const Form = ({ setPage }) => {
  const questions = [
    "1. Number of deaths of staff and contractors this year:",
    "2. Recordable injury rate per 100,000 hours worked:",
    "3. Lost time injuries and illness rate per 100,000 hours worked:",
    "4. Percentage of board members who are female:",
    "5. Percentage of executive team members who are female:",
    "6. Percentage of senior managers who are female:",
  ];

  return (
    <Layout>
      <div className={css.form}>
        <p className={css.title}>
          G1 outcome data - Section 1 - People
        </p>

        <p className={css.intro}>
          We need 3 types of outcome data from you.
          The first type involves People data. These relate to ESG items 3 and 5.
        </p>

        {questions.map(q => (<>

          <div className={css.field}>
            <label>{q}</label>
            <input type="text" />
          </div>
          <div className={css.field}>
            <label>Last year:</label>
            <input type="text" />
          </div>
          <div className={css.spacer}></div>
        </>))}

        <div className={css.field}>
          <label></label>
          <a className={css.call_to_action} onClick={() => setPage("thanks")}>Next</a>
        </div>
      </div>
    </Layout>
  );
};

export default Form;
