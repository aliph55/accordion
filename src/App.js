import React, { useState } from "react";
import data from "./data";
import SingleQuestion from "./SingleQuestion";

const App = () => {
  const [quastions, setQuastions] = useState(data);

  return (
    <main>
      <div className="container">
        <h3>quastions and answers about login</h3>
        <section className="info">
          {quastions.map((quastion) => {
            return <SingleQuestion {...quastion} key={quastion.id} />;
          })}
        </section>
      </div>
    </main>
  );
};

export default App;
