import styled from 'styled-components';

export const Input = styled.div`
    background-color: transparent;
`

export const InputLabel = styled.div`
    &.size--regular {
        font-size: 12px;
    }

    &.size--large {
        font-size: 20px;
    }
`

export const InputMain = styled.div`
    display: flex;
    border-bottom-style: solid;
    border-width: 2px;
    border-bottom-color: #dddddd;
`

export const InputMainIcon = styled.div`
    display: flex;
    align-items: center;
    fill: #dddddd;
`

export const InputMainInput = styled.input`
    flex-basis: 0;
    flex-grow: 1;
    box-sizing: border-box;
    outline: none;
    border-style: none;
    width: 100%;
    padding-left: 12px;
    padding-right: 12px;
    color: #272D4E;

    ::placeholder {
        color: #dddddd
    }

    &.size--regular {
        height: 32px;
        font-size: 16px;
    }

    &.size--large {
        height: 64px;
        font-size: 24px;
    }
`