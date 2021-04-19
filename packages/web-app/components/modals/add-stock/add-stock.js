import { useRef } from 'react';
import { useRouter } from 'next/router';
import { firestore } from '../../../helpers/firebase';
import {
    Input,
    Button
} from '../../ui';
import * as S from './add-stock-styled-components';

export const AddStock = (props) => {
    // props
    const { user } = props;

    // ref
    const formRef = useRef(null)

    // useRouterHook
    const router = useRouter();

    // event handlers
    const onCancelButtonClick = () => {
        const url = {
            pathname: '/dashboard',
            query: {
                view: router.query.view
            }
        }
        router.push(url);
    }

    const onAddButtonClick = async () => {
        console.log('test')
        try {
            // get form element values
            const formElements = formRef.current.elements;
            const symbol = formElements['symbol'].value;

            // update user data
            const newWatchlist = [...user.watchlist]
            newWatchlist.push(symbol)
            const newUserData = { watchlist: newWatchlist }
            await firestore.collection('users').doc(user.id).update(newUserData);

            // redirect back to dashboard
            window.location.href = '/dashboard?view=watchlist'
        }
        catch (error) {
            console.log('error')
        }
    }

    console.log(user)

    // render
    return (
        <S.AddStock>
            <S.AddStockBackground />
            <S.AddStockMain>
                <S.AddStockMainHead>Add Stock</S.AddStockMainHead>
                <S.AddStockMainBody>
                    <S.AddStockMainBodyForm ref={formRef}>
                        <S.AddStockMainBodyFormInput>
                            <Input
                                label="Symbol"
                                name="symbol"
                                size="regular"
                                placeholder="GOOG"
                            />
                        </S.AddStockMainBodyFormInput>
                    </S.AddStockMainBodyForm>
                </S.AddStockMainBody>
                <S.AddStockMainFooter>
                    <S.AddStockMainFooterItem>
                        <Button 
                            variant='outlined'
                            onClick={onCancelButtonClick}
                        >
                            Cancel
                        </Button>
                    </S.AddStockMainFooterItem>
                    <S.AddStockMainFooterItem>
                        <Button onClick={onAddButtonClick}>
                            Add
                        </Button>
                    </S.AddStockMainFooterItem>
                </S.AddStockMainFooter>
            </S.AddStockMain>
        </S.AddStock>
    )
}
