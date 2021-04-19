import * as S from './button-styled-components';


export const Button = (props) => {
    // props
    const { 
        children,
        color = 'primary',
        size = 'medium',
        variant = 'solid',
        onClick
    } = props;

    // className
    const className = `color--${color} size--${size} variant--${variant}`

    return (
        <S.Button 
            className={className}
            onClick={onClick}
        >
            {children}
        </S.Button>
    )
}
