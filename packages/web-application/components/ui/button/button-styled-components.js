import styled from 'styled-components';

export const Button = styled.button`
    border-radius: 4px;
    height: 32px;
    outline: none;
    font-family: Roboto;
    font-weight: 700;
    cursor: pointer;

    /* sizes */
    &.size--medium {
        width: 128px;
        height: 32px;
        font-size: 16px;
    }

    &.size--large {
        width: 256px;
        height: 48px;
        font-size: 24px;
    }

    &.size--extra-large {
        width: 384px;
        height: 64px;
        font-size: 32px;
    }

    /* variants and colors */
    &.variant--solid {
        border-style: none;
    }

    &.variant--solid.color--primary {
        background-color: #03B19B;
        color: #ffffff;
    }

    &.variant--solid.color--white {
        background-color: #ffffff;
        color: #03B19B;
    }

    &.variant--outlined {
        border-style: solid;
        border-width: 2px;
        background-color: transparent;
    }

    &.variant--outlined.color--primary {
        border-color: #03B19B;
        color: #03B19B;
    }
`