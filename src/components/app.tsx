import * as React from "react";
import { useState, useEffect } from "react";
import { GenderApi } from "./genderApi";
import { finished } from "stream";

interface Props {
  genderApi: GenderApi;
}

export const App = (props: Props): JSX.Element => {
  const [submit, setSubmit] = useState(false);
  const [name, setName] = useState("");
  const [queryResult, setQueryResult] = useState({
    finished: false,
    response: ""
  });

  const submitName = async () => {
    setSubmit(true);
    const response = await props.genderApi.getGender(name);
    setQueryResult({ finished: true, response });
  };

  return submit && queryResult.finished ? (
    <div>
      {name} is a {queryResult.response} name
    </div>
  ) : (
    <div>
      <label htmlFor="name-input">name</label>
      <input
        id={"name-input"}
        onChange={event => setName(event.target.value)}
      />
      <button onClick={submitName}>submit</button>
    </div>
  );
};
