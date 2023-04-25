type FormInput = {
    value: string | number,
    isError?: boolean,
    type?: "search" | "text" | "email" | "password",
    id?: string,
    label?: string,
    name?: string,
    placeholder?: string,
    onChange?: () => void,
}
export type FormInputs = FormInput[];

type FormLink = {
    path: string,
    text?: string
};
export type FormLinks = FormLink[];

type FormButton = {
    label?: string,
    type?: "submit" | "reset"
};

export type FormButtons = FormButton[];