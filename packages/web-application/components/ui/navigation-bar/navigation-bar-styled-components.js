import styled from 'styled-components';

export const NavigationBar = styled.div`
`

export const NavigationBarMain = styled.div`
    box-sizing: border-box;
    display: flex;
    align-items: center;
    margin: auto;
    width: 100%;
    max-width: 1600px;
    height: 96px;
    padding-left: 10%;
    padding-right: 10%;
`
export const NavigationBarMainBrand = styled.div`
`

export const NavigationBarMainBrandImage = styled.img`
    height: 32px;
    width: auto;
`

export const NavigationBarMainLinks = styled.div`
    display: flex;
    flex-basis: 0;
    flex-grow: 1;
    justify-content: flex-end;
`

export const NavigationBarMainLinksItem = styled.div`
    margin-left: 32px;
`