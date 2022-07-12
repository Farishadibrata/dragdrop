import { EuiCard } from "@elastic/eui";
import { useEffect, useState } from "react";

function Jokes() {
  // https://api.chucknorris.io/jokes/random

  const [jokes, setJokes] = useState<any>();
  const getData = () => {
    fetch(
        "https://icanhazdadjoke.com/",
        {
            headers: {
                'Accept': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
              },
        }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        setJokes(data);
      });
  };
  useEffect(() => getData(), []);
  if(!jokes) return <div>Loading...</div>;
  return (
    <EuiCard
      layout="horizontal"
      title={"Jokes"}
      description={jokes.joke}
    />
  );
}

export default Jokes;
