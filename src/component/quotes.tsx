import { EuiCard, EuiDescriptionList } from "@elastic/eui";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
function Quotes() {
  // https://api.goprogram.ai/inspiration

  const [quotes, setQuotes] = useState<any>();
  const getData = () => {
    fetch(
      "https://api.goprogram.ai/inspiration?sig=" +
        Math.floor(Math.random() * 10)
    )
      .then((res) => res.json())
      .then((data) => {
        setQuotes(data);
      });
  };
  useEffect(() => getData(), []);
  if(!quotes) return <div>Loading...</div>;
  return (
    <EuiCard
      layout="horizontal"
      title={quotes.author}
      description={quotes.quote}
    />
  );
}

export default Quotes;
