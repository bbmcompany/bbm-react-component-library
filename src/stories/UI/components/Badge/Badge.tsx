import {C3Icon} from '../Icon/Icon';
import './badge.scss'

interface C3BadgeProps {
    children?: string;
    size?: string;
    primary?: boolean;
    secondary?: boolean;
    tertiary?: boolean;
    danger?: boolean;
    success?: boolean;
    textColorIsBlack?: boolean;
    icon?: string;
    float?: string;
    overlap?: boolean;
    dot?: boolean;
}

export const C3Badge = ({
                          children = '+1',
                          size = 'small',
                          float = 'base',
                          icon = ' ',
                          dot = false,
                          ...props
                      }: C3BadgeProps) => {
    let variantClasses = ' ';

    if(icon !== ' ') {
        dot = false;
        variantClasses += 'bbm-rcl-badge--icon';
    }
    if (dot) {
        variantClasses += 'bbm-rcl-badge--dot'
    }
    for (const [key, value] of Object.entries(props)) {
        if (value) {
            variantClasses += ` bbm-rcl-badge--${key}`;
        }
    }

    return (
        <>
            {icon == ' ' ?
                <span
                    className={['bbm-rcl-badge', `bbm-rcl-badge--${size}`, `bbm-rcl-badge--${float}`, variantClasses].join(' ')}>{dot ? null : children}</span>
                :
                <span
                    className={['bbm-rcl-badge', `bbm-rcl-badge--${size}`, `bbm-rcl-badge--${float}`, variantClasses].join(' ')}>
                    <C3Icon icon={icon} size={'small'}/>
                </span>
            }
        </>
    )
}