import React, {FormEvent, LegacyRef, useState} from "react";
import "components/Forms/Form.scss";
import {TextInput} from "components/TextInput/TextInput";
import {Button} from "components/Button/Button";
import {NavLink} from "react-router-dom";
import {FormInputs, FormButtons, FormLinks} from "components/Forms/types";


interface Props {
    inputs: FormInputs,
    onSubmit:(event: FormEvent<HTMLFormElement>) => void | Promise<void>,
    onReset?: (event: FormEvent<HTMLFormElement>) => void,
    links?: FormLinks,
    buttons?: FormButtons,
    error?: string,
    onChange?: (value: string | number, id?: string) => void,
    formRef?: LegacyRef<HTMLFormElement>
}

export const Form = ({
                         inputs,
                         onSubmit,
                         onReset,
                         links,
                         buttons,
                         error = "",
                         onChange,
                         formRef
}: Props) => {
    const formButtons = buttons ? buttons : [
            {type: "submit", label: "Submit"},
            ...(typeof onReset !== undefined && [{type: "reset", label: "Reset"}])
        ];
    return (
        <form
            className="form-container"
            onSubmit={onSubmit}
            onReset={onReset}
            ref={formRef}>
            {inputs.map((input, index) =>
                <TextInput
                    key={index}
                    label={input?.label}
                    type={input?.type}
                    error={input?.isError}
                    onChange={input?.onChange || onChange}
                    name={input?.name}
                    placeholder={input?.placeholder}
                    defaultValue={input?.value}
                    id={input?.id}
                />
            )}
            {error.length > 0 && (
                <div className="form-container__error-container error-container">
                    <span className="error-container__message">{error}</span>
                </div>
            )}
            {(typeof formButtons !== undefined || typeof links !== undefined) &&
                <div>
                    {typeof formButtons !== undefined && formButtons?.map((button, index) =>
                        <Button key={index} label={button?.label} type={button?.type} />
                    )}
                    {typeof links !== undefined && links?.map((link, index) =>
                            <NavLink key={index} to={link?.path}>{link?.text}</NavLink>
                        )}
                </div>
            }
        </form>
    )
}