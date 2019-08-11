import "@testing-library/jest-dom/extend-expect";
import { cleanup, render, wait, act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import * as React from "react";
import { App } from "../src/components/app";

describe("submitting the form", () => {
  afterEach(cleanup);
  it("shows the corresponding gender for a male name", async () => {
    const apiMock = {
      getGender: jest.fn((name: string) => Promise.resolve("male"))
    };

    const { getByText, getByLabelText } = render(<App genderApi={apiMock} />);

    userEvent.type(getByLabelText(/name/), "pepe");
    userEvent.click(getByText(/submit/));

    expect(apiMock.getGender).toHaveBeenCalledWith("pepe");

    await wait(() => {
      expect(getByText(/pepe is a male name/)).toBeInTheDocument();
    });
  });
});
