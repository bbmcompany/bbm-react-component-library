import './badge.scss'

interface BadgeProps {
    children?: string;
    size?: string;
    primary?: boolean;
    secondary?: boolean;
    tertiary?: boolean;
    danger?: boolean;
    success?: boolean;
    textColorIsBlack?: boolean;
    float?: string;
    overlap?:boolean;
}

export const Badge = ({
                          children = '+1',
                          size = 'small',
                          float = ' ',
                          ...props
                      }: BadgeProps) => {
    console.log(props)
    let variantClasses = ' ';
    for (const [key, value] of Object.entries(props)) {
        if (value) {
            variantClasses += ` bbm-rcl-badge--${key}`;
        }
    }
    return (
        <span
            className={['bbm-rcl-badge', `bbm-rcl-badge--${size}`, `bbm-rcl-badge--${float}`, variantClasses].join(' ')}>{children}</span>
    )
}