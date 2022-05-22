import React, { ReactNode, useEffect, useState } from "react";
import "./App.css";

import { ProgressBar } from "react-bootstrap";

export default function App() {
  return (
    <div className="App">
      <h1>Hello there</h1>

      <Table />
    </div>
  );
}

type KeyboardEvents = React.KeyboardEvent<HTMLInputElement>;

function Table(): JSX.Element {
  const MAX_LEVEL: number = 60;

  const [level, setLevel] = useState<number>(1);
  const [currentXP, setCurrentxp] = useState<number>(0);
  const [maxXP, setMaxXP] = useState<number>(1000);
  const [name, setName] = useState<string>("Kruzus");
  const [reached, setReached] = useState<boolean>(false);

  const giveXP = () => {
    setCurrentxp((xx) => xx + 2 * 3);

    if (currentXP >= maxXP) {
      setMaxXP((xa) => xa + 5);
      setLevel((x) => x + 1);
      setCurrentxp(0);
    } else if (level === MAX_LEVEL) {
      setLevel(MAX_LEVEL);
      setReached(true);
      setCurrentxp(0);
    }
  };

  const enter_pressed = (e: any) => {
    if (e.key === "Enter") {
      giveXP();
    }
  };

  return (
    <>
      <table className="GeneratedTable">
        <thead>
          <tr>
            <th>Name</th>
            <th>Level</th>
            <th>CurrentXP</th>
            <th>maximumXP</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{name}</td>
            <td>{level}</td>
            <td>{currentXP}</td>
            <td>{maxXP}</td>
          </tr>
        </tbody>
      </table>

      <button disabled={reached} onClick={giveXP}>give xp</button>
      {reached
        ? (
          <h4 style={{ textAlign: "center" }}>
            You reached {MAX_LEVEL} level! congrats!
          </h4>
        )
        : (
          <ProgressBar
            animated={true}
            visuallyHidden={true}
            className="progress position-relative"
            role={"progressbar"}
            max={maxXP}
            now={currentXP}
            variant={"info"}
          />
        )}
      {reached
        ? null
        : <h4 style={{ textAlign: "center" }}>{currentXP} / {maxXP}</h4>}
    </>
  );
}
