import { 
    useRouter, 
    withRouter
} from 'next/router';
import { Link } from 'next/link';
import { 
    Button,
    Footer,
    NavigationBar,
    VerticalSpace
} from '../../ui';
import {
    SignUp,
    SignIn
} from '../../views';
import * as S from './landing-styled-components';
import firebase from '../../../helpers/firebase'


export const Landing = () => {
    // useRouter hook
    const router = useRouter();

    // event handlers
    const onRegularSizedSignUpButtonClick = () => {
        const url = {
            pathname: '/',
            query: {
                view: "sign-up"  // update the query param
            }
        }
        router.push(url);
    }

    const onSignInButtonClick = () => {
        const url = {
            pathname: '/',
            query: {
                view: "sign-in"  // update the query param
            }
        }
        router.push(url);
    }

    const onTryTodayNowButtonClick = () => {
        const url = {
            pathname: '/',
            query: {
                view: "sign-up"  // update the query param
            }
        }
        router.push(url);
    }

    const onLargeSizedSignUpButtonClick = () => {
        const url = {
            pathname: '/',
            query: {
                view: "sign-up"  // update the query param
            }
        }
        router.push(url);
    }

    // constants
    const links = [
        {
            value: <Button>Sign Up</Button>,
            key: "sign up",
            onClick: onRegularSizedSignUpButtonClick
        },
        {
            value: <Button variant='outlined'>Sign In</Button>,
            key: "sign in",
            onClick: onSignInButtonClick
        }
    ]

    // debugging
    
    // return
    return (
        <S.Landing>
            {/* navigation bar */}
            <NavigationBar links={links}/>

            {/* hero section */}
            <S.LandingSectionHero>
                <S.LandingSectionHeroMain>
                    <S.LandingSectionHeroMainItem>
                        <S.LandingSectionHeroMainItemIllustration src="images/undraw-finance-re-gnv2.svg" />
                    </S.LandingSectionHeroMainItem>
                    <VerticalSpace space="64px" />
                    <S.LandingSectionHeroMainItem>
                        <S.LandingSectionHeroMainItemHeading>Stock Jock</S.LandingSectionHeroMainItemHeading>
                        <S.LandingSectionHeroMainItemDescription>
                            Keep track of your finances with our
                            <S.LandingSectionHeroMainItemDescriptionLineBreak />
                            easily accesssible platform and
                            <S.LandingSectionHeroMainItemDescriptionLineBreak />
                            devices.
                        </S.LandingSectionHeroMainItemDescription>
                        <S.LandingSectionHeroMainItemButton>
                            <Button 
                                color="white"
                                size="large"
                                onClick={onTryTodayNowButtonClick}
                            >
                                Try Today
                            </Button>
                        </S.LandingSectionHeroMainItemButton>
                    </S.LandingSectionHeroMainItem>
                </S.LandingSectionHeroMain>
            </S.LandingSectionHero>

            {/* sign up section */}
            <S.LandingSectionSignUp>
                <S.LandingSectionSignUpMain>
                    <Button 
                        size="extra-large"
                        onClick={onLargeSizedSignUpButtonClick}
                    >
                        Sign Up
                    </Button>
                </S.LandingSectionSignUpMain>
            </S.LandingSectionSignUp>

            <Footer />

            {
                router.query.view === 'sign-up' &&
                <SignUp />
            }

            {
                router.query.view === 'sign-in' &&
                <SignIn />
            }

        </S.Landing>
    )
}
