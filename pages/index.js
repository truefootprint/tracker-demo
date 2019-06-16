import { useState } from "react";

import Email from "../components/email";
import Intro from "../components/intro";
import Login from "../components/login";
import Form from "../components/form";
import Thanks from "../components/thanks";

import content from "../static/content";

const Index = () => {
  const [page, setPage] = useState("email");

  const setPageAndScrollTop = (page) => {
    window.scrollTo(0, 0);
    setPage(page);
  };

  return <>
    {page === "email"  && <Email  content={content} setPage={setPageAndScrollTop} />}
    {page === "intro"  && <Intro  content={content} setPage={setPageAndScrollTop} />}
    {page === "login"  && <Login  content={content} setPage={setPageAndScrollTop} />}
    {page === "form"   && <Form   content={content} setPage={setPageAndScrollTop} />}
    {page === "thanks" && <Thanks content={content} setPage={setPageAndScrollTop} />}
  </>;
};

export default Index;
