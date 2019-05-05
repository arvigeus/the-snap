import React, { useState } from "react";

import Loading from "components/Loading";
import Gallery from "components/Gallery";

import GlobalStyle from "./GlobalStyle";
import getData from "./data";

const App: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [data, setData] = useState<Array<Person>>([]);

  if (loading) {
    getData().then(result => {
      setLoading(false);
      setData(result);
    });
    return (
      <>
        <GlobalStyle />
        <Loading />
      </>
    );
  }

  return (
    <>
      <GlobalStyle />
      <Gallery data={data} />
    </>
  );
};

export default App;
