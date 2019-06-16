import Image from "../image";
import css from "./styles.scss";

const Email = ({ setPage }) => <>
  <div className={css.header}>
    <Image src="email.svg" />
    <p>Mail</p>
  </div>

  <div className={css.email}>
    <p><b>From:</b> Roger Atkins <span>&lt;roger.atkins@abc.com&gt;</span></p>
    <p><b>To:</b> Jane Dennet <span>&lt;jane.dennet@abc.com&gt;</span></p>
    <p><b>Received:</b> 17:09pm, July 3rd, 2019</p>

    <div className={css.divider}></div>

    <p>Dear Jane,</p>
    <p>&nbsp;</p>
    <p>
      On behalf of ABC we are committed to sustainability.
      We have been instructed to collect key outcome data of all our portfolio companies.
      We have therefore enlisted the services of independent platform TrueFootprint who have created a form for you to fill out.
      Give me a ring if you need any help. See you next week in Paris!
    </p>
    <p>&nbsp;</p>
    <p><a onClick={() => setPage("intro")}>https://tracker.truefootprint.com/5226-e0c2-f094</a></p>
    <p>&nbsp;</p>
    <p>Best, Roger.</p>

    <div className={css.divider}></div>

    <a className={css.call_to_action}>↑ Reply</a>
    <a className={css.call_to_action}>→ Forward</a>
  </div>
</>;

export default Email;
