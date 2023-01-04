import styled from "styled-components";

export type LabelPropsType = {
    text: string;
    style?: React.CSSProperties;
};

export const LabelComponent: React.FunctionComponent<LabelPropsType> = (
    props
) => {
    return <Label width={props.style?.width}>{props.text}</Label>;
};

type StyledProps = {
    width?: number | string;
    minWidth?: number | string;
};

const Label = styled.label`
    display: inline-block;
    width: ${(props: StyledProps) => props.width};
    min-width: ${(props: StyledProps) => props.minWidth};
`;
