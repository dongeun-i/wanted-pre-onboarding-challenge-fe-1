import { useEffect, useState } from "react";
import styled from "styled-components";

export type IconButtonPropsType = {
    onClick: (v?: any) => void;
    icon: string;
    color?: string;
    disable?: boolean;
    width?: number;
    height?: number;
};

export const IconButtonComponent: React.FunctionComponent<
    IconButtonPropsType
> = (props) => {
    return (
        <IconButton
            onClick={(e: any) => {
                props.onClick(e);
            }}
            disabled={props.disable}
        >
            {props.icon}
        </IconButton>
    );
};

type StyledProps = {
    textColor?: string;
    textAlign?: string;
    fontSize?: string;
    width?: number;
    height?: number;
};

const IconButton = styled.button`
    display: block;
    width: ${(props: StyledProps) =>
        props.width ? `${props.width}px` : "20px"};
    height: ${(props: StyledProps) =>
        props.height ? `${props.height}` : "20px"};
    font-weight: bold;
    border: none;
    background: transparent;
    color: ${(props: StyledProps) =>
        props.textColor ? props.textColor : "#000"};
    &:disabled {
        color: #777;
    }
`;
