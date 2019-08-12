import { GenderApi } from "./genderApi";
import { useState } from "react";
import * as React from "react";

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

    return (
        <>
            <div>
                <label htmlFor="name-input">name</label>
                <input
                    id={"name-input"}
                    onChange={event => {
                        console.log("Calling with " + event.target.value);
                        setName(event.target.value);
                        submitName();
                    }}
                />
            </div>
            {submit && queryResult.finished && (
                <div>
                    {name} is a {queryResult.response} name
                </div>
            )}
        </>
    );
};
