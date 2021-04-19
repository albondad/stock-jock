import { useRouter } from 'next/router'
import {
    Button,
    Icon
} from '../../ui';
import { AddStock } from '../../modals';
import { firestore } from '../../../helpers/firebase';
import * as S from './watchlist-styled-components';

export const Watchlist = (props) => {
    // props
    const { user } = props;
    user.watchlist = user.watchlist || [];

    // useRouterHook
    const router = useRouter();

    // event handlers
    const onUpdateButtonClick = () => {
        const url = {
            pathname: '/dashboard',
            query: {
                ...router.query,
                modal: "add-stock"  // update the query param
            }
        }
        router.push(url);
    }

    const onDeleteButtonClick = async (index) => {
        console.log(index)
        
        // update user data
        const newWatchlist = [...user.watchlist]
        newWatchlist.splice(index, 1)
        const newUserData = { watchlist: newWatchlist }
        await firestore.collection('users').doc(user.id).update(newUserData);

        window.location.href = '/dashboard?view=watchlist'
    }

    // render
    return (
        <S.Watchlist>
            <S.WatchlistHeading>
                Watchlist
            </S.WatchlistHeading>
            <S.WatchlistMain>
                <S.WatchlistMainHeading>Watchlist Details</S.WatchlistMainHeading>

                <S.WatchlistMainActions>
                    <Button onClick={onUpdateButtonClick}>Add</Button>
                </S.WatchlistMainActions>

                <S.WatchlistMainListHead>
                    <S.WatchlistMainListHeadContent>Symbol</S.WatchlistMainListHeadContent>
                    <S.WatchlistMainListHeadTrash>
                        <Icon name='' />
                    </S.WatchlistMainListHeadTrash>
                </S.WatchlistMainListHead>

                {
                    user.watchlist.map((watchlistItem, index) => (
                        <S.WatchlistMainListItem key={index}>
                            <S.WatchlistMainListItemContent>{watchlistItem}</S.WatchlistMainListItemContent>
                            <S.WatchlistMainListItemTrash onClick={() => onDeleteButtonClick(index)}>
                                <Icon name='trash'/>
                            </S.WatchlistMainListItemTrash>
                        </S.WatchlistMainListItem>
                    ))
                }

            </S.WatchlistMain>

            {
                router.query.modal === 'add-stock' &&
                <AddStock user={user}/>
            }
        </S.Watchlist>
    )
}
