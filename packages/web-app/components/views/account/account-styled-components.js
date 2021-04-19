import styled from 'styled-components';

export const Account = styled.div`
`

export const AccountHeading = styled.div`
    font-size: 32px;
    font-weight: 700;
`

export const AccountMain = styled.div`
    box-sizing: border-box;
    margin-top: 12px;
    background-color: #ffffff;
    max-width: 576px;
    padding: 32px 32px 48px;
    border-radius: 8px;
`

export const AccountMainHeading = styled.div`
    font-size: 24px;
    font-weight: 700;
`

export const AccountMainLabel = styled.div`
    font-size: 12px;
    font-weight: 700;

    :first-of-type {
        margin-top: 24px;
    }

    :not(:first-of-type) {
        margin-top: 16px;
    }
`

export const AccountMainValue = styled.div`
    font-size: 16px;
    margin-top: 8px;
`

export const AccountActions= styled.div`
    margin-top: 24px;
    display: flex;
    justify-content: flex-end;
`