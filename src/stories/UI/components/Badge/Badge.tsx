import {C3Icon} from '../Icon/Icon';
import './badge.scss'

interface C3BadgeProps {
    children?: string;
    size?: string;
    primary?: boolean;
    secondary?: boolean;
    tertiary?: boolean;
    orange?:boolean;
    grey?:boolean;
    error?:boolean;
    success?:boolean;
    warning?:boolean;
    info?:boolean;
    icon?: string;
    float?: string;
    overlap?: boolean;
    dot?: boolean;
    className?: string;
}

export const C3Badge = ({
                            children = '+1',
                            size = 's',
                            float = 'base',
                            icon = ' ',
                            dot = false,
                            className = ' ',
                            ...props
                        }: C3BadgeProps) => {
    let variantClasses = ' ';

    if (icon !== ' ') {
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
                    className={['bbm-rcl-badge', 'b-border-50', `bbm-rcl-badge--${size}`, `bbm-rcl-badge--${float}`, variantClasses, className].join(' ')}>{dot ? null : children}</span>
                :
                <span
                    className={['bbm-rcl-badge', 'b-border-50', `bbm-rcl-badge--${float}`, variantClasses, className].join(' ')}>
                    <C3Icon icon={icon}  size={size}/>
                </span>
            }
        </>
    )
}