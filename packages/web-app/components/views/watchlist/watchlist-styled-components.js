import styled from 'styled-components';

export const Watchlist = styled.div`
`

export const WatchlistHeading = styled.div`
    font-size: 32px;
    font-weight: 700;
`

export const WatchlistMain = styled.div`
    box-sizing: border-box;
    margin-top: 12px;
    background-color: #ffffff;
    padding: 32px 32px 48px;
    border-radius: 8px;
`

export const WatchlistMainHeading = styled.div`
    display: flex;
    height: 48px;
    font-size: 24px;
    font-weight: 700;
`

export const WatchlistMainListHead = styled.div`
    display: flex;
    align-items: center;
    margin-top: 24px;
    height: 48px;
`

export const WatchlistMainListHeadContent = styled.div`
    flex-basis: 0;
    flex-grow: 1;
    font-weight: 700;
`

export const WatchlistMainListHeadTrash = styled.div`
    width: 48px;
    height: 48px;
`

export const WatchlistMainListItem= styled.div`
    display: flex;
    align-items: center;
    border-top-style: solid;
    border-top-width: 2px;
    border-top-color: #dddddd;
    height: 48px;
`

export const WatchlistMainListItemContent = styled.div`
    flex-basis: 0;
    flex-grow: 1;
`

export const WatchlistMainListItemTrash = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 48px;
    height: 48px;
    cursor: pointer;
`

export const WatchlistMainActions= styled.div`
    margin-top: 24px;
    display: flex;
    justify-content: flex-end;
`