import styled from 'styled-components';

export const AddStock = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
`
export const AddStockBackground = styled.div`

`

export const AddStockMain = styled.div`
    margin: 128px auto;
    border-radius: 8px;
    background-color: #ffffff;
    max-width: 800px;
    padding: 32px 32px 48px 32px;
`

export const AddStockMainHead = styled.div`
    font-size: 24px;
    font-weight: 700;
`

export const AddStockMainBody = styled.div`
    margin-top: 24px;
`

export const AddStockMainBodyForm = styled.form`
`

export const AddStockMainBodyFormInput = styled.div`
    :not(:first-of-type) {
        margin-top: 16px;
    }
`

export const AddStockMainFooter = styled.div`
    display: flex;
    margin-top: 48px;
    justify-content: flex-end;
`

export const AddStockMainFooterItem = styled.div`
    margin-left: 16px;
`