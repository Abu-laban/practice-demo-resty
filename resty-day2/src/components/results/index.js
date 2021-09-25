import React from "react";
import "./results.scss";
import Loading from "../loading";
import JSONPretty from "react-json-pretty";
import "react-json-pretty/themes/monikai.css";

function Results(props) {
  return (
    <section>
      <pre>
        {props.data ? (
          <div>
            <h2>count : {props.data.count}</h2>
            <h3>Headers :</h3> <JSONPretty data={props.data.headers} />
            <h3>Body :</h3> <JSONPretty data={props.data.results} />
          </div>
        ) : (
          <Loading />
        )}
      </pre>
    </section>
  );
}

export default Results;
