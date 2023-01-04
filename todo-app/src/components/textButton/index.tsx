import { useEffect, useState } from "react";
import styled from "styled-components";

export type TextButtonPropsType = {
    onClick: (v?: any) => void;
    text: string;
    textColor?: string;
    disable?: boolean;
    textAlign?: string;
    fontSize?: string;
};

export const TextButtonComponent: React.FunctionComponent<
    TextButtonPropsType
> = (props) => {
    return (
        <TextButton
            onClick={(e: any) => {
                props.onClick(e);
            }}
            disabled={props.disable}
        >
            {props.text}
        </TextButton>
    );
};

type StyledProps = {
    textColor?: string;
    textAlign?: string;
    fontSize?: string;
};

const TextButton = styled.button`
    display: block;
    font-size: ${(props: StyledProps) =>
        props.fontSize ? props.fontSize : "12px"};
    text-align: ${(props: StyledProps) => props.textAlign};
    font-weight: bold;
    border: none;
    background: transparent;
    color: ${(props: StyledProps) =>
        props.textColor ? props.textColor : "#000"};
    &:disabled {
        color: #777;
    }
`;
