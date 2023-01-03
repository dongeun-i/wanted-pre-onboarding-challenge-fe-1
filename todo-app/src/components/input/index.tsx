import { useEffect, useState } from "react";
import styled from "styled-components";

export type InputPropsType = {
    type: string;
    value?: string;
    onChange: (v: any) => void;
    placeholder?: string;
};

export const InputComponent: React.FunctionComponent<InputPropsType> = (
    props
) => {
    return (
        <Input
            type={props.type}
            value={props.value}
            onChange={(e: any) => {
                props.onChange(e);
            }}
            placeholder={props.placeholder}
        />
    );
};

const Input = styled.input``;
