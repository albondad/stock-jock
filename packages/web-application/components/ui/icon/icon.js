import * as S from './icon-styled-components';
import { paths } from './icon-paths'

export const Icon = (props) => {
    // props
    const {
        color = 'inherit',
        name = 'lock',
        size = '24px'
    } = props;
    
    return (
        <S.Icon
            height={size}
            width={size}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            fill={color}
        >
            <S.IconPath d={paths[name]} />
        </S.Icon>
    )
}
