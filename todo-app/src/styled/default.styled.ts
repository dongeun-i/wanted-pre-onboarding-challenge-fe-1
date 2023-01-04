import styled, { createGlobalStyle } from "styled-components";
import LogoImg from "../images/intro.png";

export const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    overflow-y: auto;
    padding: 10px 10px;
`;
export const Logo = styled.img.attrs({ src: LogoImg })`
    width: 200px;
`;

export const Wrap = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
`;

export const FlexRow = styled.div`
    display: flex;
    align-items: center;
    &.start {
        justify-content: flex-start;
        align-items: flex-start;
    }
    &.center {
        justify-content: center;
    }
    &.between {
        justify-content: space-between;
    }
    &.mb {
        margin-bottom: 20px;
    }
    &.mb-100 {
        margin-bottom: 100px;
    }
`;

export const FlexColumns = styled.div`
    display: flex;
    flex-direction: column;
    &.start {
        justify-content: flex-start;
        align-items: flex-start;
    }
    &.center {
        justify-content: center;
        align-items: center;
    }
    &.between {
        justify-content: space-between;
        align-items: center;
    }
`;
