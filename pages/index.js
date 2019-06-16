import { useState } from "react";

import Intro from "../components/intro";
import Login from "../components/login";
import Form from "../components/form";

const Index = () => {
  const [page, setPage] = useState("intro");

  const setPageAndScrollTop = (page) => {
    window.scrollTo(0, 0);
    setPage(page);
  };

  return <>
    {page === "intro" && <Intro setPage={setPageAndScrollTop} />}
    {page === "login" && <Login setPage={setPageAndScrollTop} />}
    {page === "form"  && <Form  setPage={setPageAndScrollTop} />}
  </>;
};

export default Index;
