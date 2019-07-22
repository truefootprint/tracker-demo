import css from "./styles.scss";

const Email = ({ content, setPage, framework }) => {
  const t = content.email;

  return <>
    <div className={css.header}>
      <img src="/static/email.svg" />
      <p>{t.header}</p>

      <div className={css.frameworks}>
        <a className={framework === "sdg" ? css.active : undefined} href="?framework=sdg">SDG</a>
        <a className={framework === "esg" ? css.active : undefined} href="?framework=esg">ESG</a>
      </div>

      <a href="/videos">Videos</a>
    </div>

    <div className={css.email}>
      <p><b>{t.from}</b> {t.sender_name} <span>{t.sender_email}</span></p>
      <p><b>{t.to}</b> {t.receiver_name} <span>{t.receiver_email}</span></p>
      <p><b>{t.received}</b> {t.date}</p>

      <div className={css.divider}></div>

      <p>{t.para1}</p>
      <p>&nbsp;</p>
      <p>{t.para2}</p>
      <p>&nbsp;</p>
      <p><a onClick={() => setPage("intro")}>{t.link}</a></p>
      <p>&nbsp;</p>
      <p>{t.para3}</p>

      <div className={css.divider}></div>

      <a className={css.call_to_action}>{t.cta1}</a>
      <a className={css.call_to_action}>{t.cta2}</a>
    </div>
  </>;
}

export default Email;
