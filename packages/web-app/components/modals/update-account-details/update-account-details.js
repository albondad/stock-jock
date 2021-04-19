import { useRef } from 'react';
import { useRouter } from 'next/router';
import { firestore } from '../../../helpers/firebase';
import {
    Input,
    Button
} from '../../ui';
import * as S from './update-account-details-styled-components';

export const UpdateAccountDetails = (props) => {
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

    const onUpdateButtonClick = async () => {
        console.log('test')
        try {
            // get form element values
            const formElements = formRef.current.elements;
            const fullName = formElements['fullName'].value;
            const rfid = formElements['rfid'].value;

            // update user data
            const newUserData = {
                fullName,
                rfid
            }
            await firestore.collection('users').doc(user.id).update(newUserData);

            // redirect back to dashboard
            window.location.href = '/dashboard?view=account'
        }
        catch (error) {
            console.log('error')
        }
    }

    console.log(user)

    // render
    return (
        <S.UpdateAccountDetails>
            <S.UpdateAccountDetailsBackground />
            <S.UpdateAccountDetailsMain>
                <S.UpdateAccountDetailsMainHead>Update Account Details</S.UpdateAccountDetailsMainHead>
                <S.UpdateAccountDetailsMainBody>
                    <S.UpdateAccountDetailsMainBodyForm ref={formRef}>
                        <S.UpdateAccountDetailsMainBodyFormInput>
                            <Input
                                label="Full Name"
                                name="fullName"
                                size="regular"
                            />
                        </S.UpdateAccountDetailsMainBodyFormInput>
                        <S.UpdateAccountDetailsMainBodyFormInput>
                            <Input
                                label="RFID"
                                name="rfid"
                                size="regular"
                            />
                        </S.UpdateAccountDetailsMainBodyFormInput>
                    </S.UpdateAccountDetailsMainBodyForm>
                </S.UpdateAccountDetailsMainBody>
                <S.UpdateAccountDetailsMainFooter>
                    <S.UpdateAccountDetailsMainFooterItem>
                        <Button 
                            variant='outlined'
                            onClick={onCancelButtonClick}
                        >
                            Cancel
                        </Button>
                    </S.UpdateAccountDetailsMainFooterItem>
                    <S.UpdateAccountDetailsMainFooterItem>
                        <Button onClick={onUpdateButtonClick}>
                            Update
                        </Button>
                    </S.UpdateAccountDetailsMainFooterItem>
                </S.UpdateAccountDetailsMainFooter>
            </S.UpdateAccountDetailsMain>
        </S.UpdateAccountDetails>
    )
}
