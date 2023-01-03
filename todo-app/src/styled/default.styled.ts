import styled, { createGlobalStyle } from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    overflow-y: auto;
    padding: 10px 10px;
`;

export const Wrap = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
`;

export const FlexRow = styled.div`
    display:flex &.start {
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
