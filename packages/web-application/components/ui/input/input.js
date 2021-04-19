import * as S from './input-styled-components';
import { Icon } from '..';


export const Input = (props) => {
    // props
    const { 
        iconName,
        label,
        name,
        placeholder,
        size = 'large',
        type
    } = props;

    // classname
    const className = `size--${size}`;
    const iconSize = '32px';

    // render
    return (
        <S.Input>
            <S.InputLabel className={className}>{label}</S.InputLabel>
            <S.InputMain 
            >
                {
                    iconName &&
                    <S.InputMainIcon>
                        <Icon
                            name={iconName}
                            size={iconSize}
                        />
                    </S.InputMainIcon>
                }

                <S.InputMainInput
                    className={className}
                    name={name}
                    placeholder={placeholder}
                    type={type}
                />
            </S.InputMain>
        </S.Input>
    )
}
