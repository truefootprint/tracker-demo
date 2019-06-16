import { useState } from "react";

import Email from "../components/email";
import Intro from "../components/intro";
import Login from "../components/login";
import Form from "../components/form";
import Thanks from "../components/thanks";

const Index = () => {
  const [page, setPage] = useState("email");

  const setPageAndScrollTop = (page) => {
    window.scrollTo(0, 0);
    setPage(page);
  };

  return <>
    {page === "email"  && <Email  setPage={setPageAndScrollTop} />}
    {page === "intro"  && <Intro  setPage={setPageAndScrollTop} />}
    {page === "login"  && <Login  setPage={setPageAndScrollTop} />}
    {page === "form"   && <Form   setPage={setPageAndScrollTop} />}
    {page === "thanks" && <Thanks setPage={setPageAndScrollTop} />}
  </>;
};

export default Index;
