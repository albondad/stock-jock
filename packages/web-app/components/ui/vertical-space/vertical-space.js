import * as S from './vertical-space-styled-components';


export const VerticalSpace = (props) => {
    // props
    const { space } = props;

    // render
    return <S.VerticalSpace style={{height: space}}/>
}
