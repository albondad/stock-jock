import styled from 'styled-components';

export const UpdateAccountDetails = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
`
export const UpdateAccountDetailsBackground = styled.div`

`

export const UpdateAccountDetailsMain = styled.div`
    margin: 128px auto;
    border-radius: 8px;
    background-color: #ffffff;
    max-width: 800px;
    padding: 32px 32px 48px 32px;
`

export const UpdateAccountDetailsMainHead = styled.div`
    font-size: 24px;
    font-weight: 700;
`

export const UpdateAccountDetailsMainBody = styled.div`
    margin-top: 24px;
`

export const UpdateAccountDetailsMainBodyForm = styled.form`
`

export const UpdateAccountDetailsMainBodyFormInput = styled.div`
    :not(:first-of-type) {
        margin-top: 16px;
    }
`

export const UpdateAccountDetailsMainFooter = styled.div`
    display: flex;
    margin-top: 48px;
    justify-content: flex-end;
`

export const UpdateAccountDetailsMainFooterItem = styled.div`
    margin-left: 16px;
`