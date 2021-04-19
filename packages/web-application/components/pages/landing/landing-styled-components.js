import styled from 'styled-components';

export const Landing = styled.div`
`

// hero section

export const LandingSectionHero = styled.div`
`

export const LandingSectionHeroMain = styled.div`
    display: flex;
    max-width: 1600px;
    height: 640px;
    padding-right: 10%;
    padding-left: 10%;
    background-color: #03B19B;
`


export const LandingSectionHeroMainItem = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex-basis: 0;
    flex-grow: 1;
    height: 640px;
    background-color: #03B19B;

    :first-of-type {
        padding-right: 32px;
    }

    :last-of-type {
        padding-left: 32px;
    }
`

export const LandingSectionHeroMainItemIllustration = styled.img`
    width: 100%;
`


export const LandingSectionHeroMainItemHeading = styled.div`
    color: #ffffff;
    font-size: 48px;
    font-weight: 700;
`

export const LandingSectionHeroMainItemDescription = styled.div`
    margin-top: 20px;
    color: #ffffff;
    font-size: 32px;
    line-height: 1.5em;
`

export const LandingSectionHeroMainItemDescriptionLineBreak = styled.br`
    @media (max-width: 1200px) {
        display: none;
    }
`

export const LandingSectionHeroMainItemButton = styled.div`
    margin-top: 20px;
`


// sign up section

export const LandingSectionSignUp = styled.div`
`

export const LandingSectionSignUpMain = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 1600px;
    height: 256px;
    padding-right: 10%;
    padding-left: 10%;
`

// sign in