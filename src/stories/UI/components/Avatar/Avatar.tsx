import './avatar.scss'

interface C3AvatarProps {
    src?: string;
    alt?: string;
    size?: string;
    square?: boolean;
    rounded?: boolean;
    circular?: boolean;
    backgroundColor?: string;
    primary?: boolean;
    secondary?: boolean;
    tertiary?: boolean;
    textColorIsWhite?: boolean;
    children?: string;
}

export const C3Avatar = ({
                             src = 'https://www.w3schools.com/w3images/avatar5.png',
                             size = 'medium',
                             alt = 'undefined',
                             backgroundColor = ' ',
                             children = ' ',
                             ...props
                         }:
                             C3AvatarProps
) => {

    if (children.length > 2) {
        children = children[0] + children[1];
        children = children.toUpperCase();
    }
    let variantClasses = '';
    for (const [key, value] of Object.entries(props)) {
        if (value) {
            variantClasses += ` bbm-rcl-avatar--${key}`;
        }
    }
    return (

        <div className={'bbm-rcl-avatar'}>
            {children == ' ' ?
                <img alt={alt} src={src}
                     className={[variantClasses, ` bbm-rcl-avatar--${size}`].join('')}/>
                :
                <div
                    style={{backgroundColor: backgroundColor}}
                    className={['bbm-rcl-avatar--letter', variantClasses, ` bbm-rcl-avatar--${size}`].join('')}
                >{children}</div>}

        </div>

    )
}