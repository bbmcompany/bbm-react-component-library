import './label.scss'
import {C3Icon} from "../Icon/Icon";

interface C3LabelProps {
    size?: string;
    children?: string;
    color?: string;
    backgroundColor?: string;
    icon?: string;
    iconLabel?: boolean;
    iconPosition?: string;
    primary?: boolean;
    secondary?: boolean;
    tertiary?: boolean;
    error?: boolean;
    warning?: boolean;
    success?: boolean;
    info?: boolean;
    orange?: boolean;
    grey?: boolean;
    solid?: boolean;
    outline?: boolean;
    className?: string;
}

export const C3Label = ({
                            size = 's',
                            children = ' ',
                            color = ' ',
                            backgroundColor = ' ',
                            icon = ' ',
                            className = ' ',
                            iconLabel = false,
                            iconPosition = 'Left',
                            ...props
                        }: C3LabelProps) => {
    let variantClasses = ' ';
    if (iconLabel && icon == ' ') {
        icon = 'academy';
    }

    for (const [key, value] of Object.entries(props)) {
        if (value) {
            variantClasses += ` bbm-rcl-label--${key}`;
        }
    }

    return (
        <div className={['bbm-rcl-label'].join(' ')}>
             <span
                 className={['bbm-rcl-label', variantClasses, `bbm-rcl-label--${size}`, className].join(' ')}
                 style={{color: color, backgroundColor: backgroundColor}}
             >
    {icon == ' ' ? <>
        <div className={"text"}>
            {children}
        </div>
    </> : <div className={['icon-container', `--${iconPosition}`].join(' ')}>
        <C3Icon icon={icon} size={size}></C3Icon>
        <div className={iconLabel ? 'secret-text' : 'text'}>
            {children}
        </div>
    </div>}
        </span>

        </div>
    );
}