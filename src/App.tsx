import React, { useState } from "react";

import SEO from "components/SEO";
import Loading from "components/Loading";
import Gallery from "components/Gallery";

import GlobalStyle from "./GlobalStyle";
import image from "components/Endgame/thanos.jpg";
import getData from "./data";

const App: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [data, setData] = useState<Array<Person>>([]);

  const headings = (
    <>
      <SEO
        title="The Snap - unleash your inner Thanos"
        description="Snap all the people who disappeared during the decimation. There is only one possible future where the «Avengers» can win!"
        image={image}
      />
      <GlobalStyle />
    </>
  );

  if (loading) {
    getData().then(result => {
      setLoading(false);
      setData(result);
    });
    return (
      <>
        {headings}
        <Loading />
      </>
    );
  }

  return (
    <>
      {headings}
      <Gallery data={data} />
    </>
  );
};

export default App;
