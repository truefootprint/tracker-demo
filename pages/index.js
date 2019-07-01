import { useState } from "react";

import Email from "../components/email";
import Intro from "../components/intro";
import Login from "../components/login";
import Form from "../components/form";
import Thanks from "../components/thanks";

import content from "../static/content";

const Index = ({ query }) => {
  const [page, setPage] = useState("email");
  const framework = getFrameworkFromUrl();

  const setPageAndScrollTop = (page) => {
    window.scrollTo(0, 0);
    setPage(page);
  };

  const props = { content, setPage: setPageAndScrollTop, framework };

  return <>
    {page === "email"  && <Email  {...props} />}
    {page === "intro"  && <Intro  {...props} />}
    {page === "login"  && <Login  {...props} />}
    {page === "form"   && <Form   {...props} />}
    {page === "thanks" && <Thanks {...props} />}
  </>;
};

const getFrameworkFromUrl = () => {
  if (typeof window === "undefined") return "sdg";

  return /esg/.test(window.location) ? "esg" : "sdg"
};

export default Index;
