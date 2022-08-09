import './avatar.scss'

interface C3AvatarProps {
    src?: string;
    alt?: string;
    size?: string;
    primary?: boolean;
    secondary?: boolean;
    tertiary?: boolean;
    error?: boolean;
    success?: boolean;
    info?: boolean;
    warning?: boolean;
    grey?: boolean;
    orange?: boolean;
    text: boolean;
    icon?: boolean;
    children?: string;
    className?: string;
}

export const C3Avatar = ({
                             src = 'https://www.blexar.com/avatar.png',
                             size = 's',
                             text = false,
                             icon = false,
                             alt = 'undefined',
                             children = ' ',
                             className = ' ',
                             ...props
                         }: C3AvatarProps) => {

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

        <div className={['bbm-rcl-avatar', className].join(' ')}>
            {text ?
                <div
                    className={['bbm-rcl-avatar--letter', variantClasses, ` bbm-rcl-avatar--${size}`].join(' ')}
                >{children}</div>
                :
                icon ?
                    <img alt={alt}
                         src={'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png'}
                         className={[variantClasses, ` bbm-rcl-avatar--${size}`, 'bbm-rcl-avatar--icon'].join(' ')}/>
                    :
                    <img alt={alt} src={src}
                         className={[variantClasses, ` bbm-rcl-avatar--${size}`].join(' ')}/>
            }
        </div>

    )
}