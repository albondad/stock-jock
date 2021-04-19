import { useRouter } from 'next/router'
import {
    Button
} from '../../ui';
import { UpdateAccountDetails } from '../../modals';
import * as S from './account-styled-components';

export const Account = (props) => {
    // props
    const { user } = props;

    // useRouterHook
    const router = useRouter();

    // event handlers
    const onUpdateButtonClick = () => {
        const url = {
            pathname: '/dashboard',
            query: {
                ...router.query,
                modal: "update-account-details"  // update the query param
            }
        }
        router.push(url);
    }

    // render
    return (
        <S.Account>
            <S.AccountHeading>
                Account
            </S.AccountHeading>
            <S.AccountMain>
                <S.AccountMainHeading>Account Details</S.AccountMainHeading>
                <S.AccountMainLabel>Full Name</S.AccountMainLabel>
                <S.AccountMainValue>{user.fullName}</S.AccountMainValue>
                <S.AccountMainLabel>RFID</S.AccountMainLabel>
                <S.AccountMainValue>{user.rfid}</S.AccountMainValue>
                <S.AccountMainLabel>Email</S.AccountMainLabel>
                <S.AccountMainValue>{user.email}</S.AccountMainValue>
                <S.AccountMainLabel>ID</S.AccountMainLabel>
                <S.AccountMainValue>{user.id}</S.AccountMainValue>
                <S.AccountActions>
                    <Button onClick={onUpdateButtonClick}>Update</Button>
                </S.AccountActions>
            </S.AccountMain>

            {
                router.query.modal === 'update-account-details' &&
                <UpdateAccountDetails user={user}/>
            }
        </S.Account>
    )
}
