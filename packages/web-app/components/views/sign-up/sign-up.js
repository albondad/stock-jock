import { useRef } from 'react';
import { useRouter } from 'next/router';
import { createUserWithEmailAndPassword } from '../../../helpers/firebase';
import {
    Button,
    Icon,
    Input
} from '../../ui';
import * as S from './sign-up-styled-components';

export const SignUp = (props) => {
    // useRef
    const formRef = useRef(null);

    // useRouter
    const router = useRouter();

    // event handlers
    const onGoBackTextClick = () => {
        router.push('/')
    }

    const onSignUpButtonClick = async () => {
        try {
            // get form element values
            const formElements = formRef.current.elements;
            const fullName = formElements['fullName'].value;
            const rfid = formElements['rfid'].value;
            const email = formElements['email'].value;
            const password = formElements['password'].value;
    
            // attempt to create a user
            let user = undefined;
            if (
                fullName &&
                rfid &&
                email &&
                password
            ) {
                const data = {
                    fullName,
                    rfid,
                    email,
                    password
                }
                user = await createUserWithEmailAndPassword(data)
            }

            // redirect if a user is created
            if (user) {
                router.push('/dashboard')
            }
        }
        catch (error) {
            // debugging
            // console.log(error)
        }
    }
    
    // render
    return (
        <S.SignUp>
            <S.SignUpMain>
                {/* heading */}
                <S.SignUpMainGoBack onClick={onGoBackTextClick}>
                    <S.SignUpMainGoBackIcon>
                        <Icon name='arrow-back'/>
                    </S.SignUpMainGoBackIcon>
                    <S.SignUpMainGoBackText>
                        Go Back
                    </S.SignUpMainGoBackText>
                </S.SignUpMainGoBack>
                <S.SignUpMainHeading>
                    Sign Up
                </S.SignUpMainHeading>

                {/* form */}
                <S.SignUpMainForm ref={formRef}>
                    <S.SignUpMainFormInput>
                        <Input
                            iconName="person-outline"
                            label="Full Name"
                            name="fullName"
                            placeholder="John Doe"
                            size="large"
                        />
                    </S.SignUpMainFormInput>
                    <S.SignUpMainFormInput>
                        <Input 
                            iconName="credit-card"
                            label="RFID"
                            name="rfid"
                            placeholder="00000000"
                            type="number"
                            size="large"
                        />
                    </S.SignUpMainFormInput>
                    <S.SignUpMainFormInput>
                        <Input 
                            iconName="mail"
                            label="Email"
                            name="email"
                            placeholder="johndoe@gmail.com"
                            size="large"
                        />
                    </S.SignUpMainFormInput>
                    <S.SignUpMainFormInput>
                        <Input 
                            iconName="lock"
                            label="password"
                            name="password"
                            placeholder="password"
                            type="password"
                            size="large"
                        />
                    </S.SignUpMainFormInput>
                </S.SignUpMainForm>

                <S.SignUpMainButton>
                    <Button 
                        size="large"
                        onClick={onSignUpButtonClick}
                    >
                        Sign Up
                    </Button>
                </S.SignUpMainButton>
            </S.SignUpMain>
        </S.SignUp>
    )
}
