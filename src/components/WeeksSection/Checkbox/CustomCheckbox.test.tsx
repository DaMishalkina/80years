import React from "react";
import { CustomCheckbox } from "./CustomCheckbox";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("<CustomCheckbox />", () => {
    test("Should call onCheck successfully", async () => {
        render(<CustomCheckbox />);
        expect(screen.queryByRole("checkbox")).not.toBeChecked();
        await userEvent.click(screen.getByRole("checkbox"));

        expect(screen.getByRole("checkbox")).toBeChecked();
    })
})