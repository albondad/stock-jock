import * as S from './navigation-bar-styled-components';

export const NavigationBar = (props) => {
    // props
    const { links = [] } = props;
    
    // render
    return (
        <S.NavigationBar>
            <S.NavigationBarMain>
                <S.NavigationBarMainBrand>
                    <S.NavigationBarMainBrandImage img src="/images/logo.png"/>
                </S.NavigationBarMainBrand>
                <S.NavigationBarMainLinks>
                    {
                        links.map((link) => (
                            <S.NavigationBarMainLinksItem
                                key={link.key}
                                onClick={link.onClick}
                            >
                                {link.value}
                            </S.NavigationBarMainLinksItem>
                        ))
                    }
                </S.NavigationBarMainLinks>
            </S.NavigationBarMain>
        </S.NavigationBar>
    )
}
