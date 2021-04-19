import { useRef } from 'react';
import { useRouter } from 'next/router';
import { signInWithEmailAndPassword } from '../../../helpers/firebase';
import {
    Button,
    Icon,
    Input
} from '../../ui';
import * as S from './sign-in-styled-components';

export const SignIn = (props) => {
    // useRef
    const formRef = useRef(null);

    // useRouter
    const router = useRouter();

    // event handlers
    const onGoBackTextClick = () => {
        router.push('/')
    }

    const onSignInButtonClick = async () => {
        try {
            // get form element values
            const formElements = formRef.current.elements;
            const email = formElements['email'].value;
            const password = formElements['password'].value;
    
            // attempt to create a user
            let user = undefined;
            if (
                email &&
                password
            ) {
                const data = {
                    email,
                    password
                }
                user = await signInWithEmailAndPassword(data)
            }

            // redirect if a user is created
            if (user) {
                router.push('/dashboard')
            }
        }
        catch (error) {
            console.log(error)
        }
    }
    
    // render
    return (
        <S.SignIn>
            <S.SignInMain>
                {/* heading */}
                <S.SignInMainGoBack onClick={onGoBackTextClick}>
                    <S.SignInMainGoBackIcon>
                        <Icon name='arrow-back'/>
                    </S.SignInMainGoBackIcon>
                    <S.SignInMainGoBackText>
                        Go Back
                    </S.SignInMainGoBackText>
                </S.SignInMainGoBack>
                <S.SignInMainHeading>
                    Sign In
                </S.SignInMainHeading>

                {/* form */}
                <S.SignInMainForm ref={formRef}>
                    <S.SignInMainFormInput>
                        <Input 
                            iconName="mail"
                            label="Email"
                            name="email"
                            placeholder="johndoe@gmail.com"
                            size="large"
                        />
                    </S.SignInMainFormInput>
                    <S.SignInMainFormInput>
                        <Input 
                            iconName="lock"
                            label="password"
                            name="password"
                            placeholder="password"
                            type="password"
                            size="large"
                        />
                    </S.SignInMainFormInput>
                </S.SignInMainForm>

                <S.SignInMainButton>
                    <Button 
                        size="large"
                        onClick={onSignInButtonClick}
                    >
                        Sign In
                    </Button>
                </S.SignInMainButton>
            </S.SignInMain>
        </S.SignIn>
    )
}
