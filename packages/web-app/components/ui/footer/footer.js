import * as S from './footer-styled-components';


export const Footer = (props) => {
    // props
    const { developers } = props;

    return (
        <S.Footer>
            <S.FooterMain>
                <S.FooterMainSection>
                    <S.FooterMainSectionHeading>Developers</S.FooterMainSectionHeading>
                    <S.FooterMainSectionItem>Alex Andrew</S.FooterMainSectionItem>
                    <S.FooterMainSectionItem>Josh Dudley</S.FooterMainSectionItem>
                    <S.FooterMainSectionItem>Al Bondad</S.FooterMainSectionItem>
                </S.FooterMainSection>
            </S.FooterMain>
        </S.Footer>
    )
}
