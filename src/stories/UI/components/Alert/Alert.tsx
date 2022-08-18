import {C3Icon} from '../Icon/Icon';
import './alert.scss'

interface C3AlertProps {
    text?: string;
    size?: string;
    primary?: boolean;
    secondary?: boolean;
    tertiary?: boolean;
    orange?: boolean;
    grey?: boolean;
    error?: boolean;
    success?: boolean;
    warning?: boolean;
    info?: boolean;
    icon?: string;
    // @ts-ignore
    children?: IntrinsicAttributes & C3AlertProps;
    className?: string;
}

export const C3Alert = ({
                            text = 'BBM React Component Libray Alert',
                            size = 's',
                            icon = ' ',
                            children = undefined,
                            className = ' ',
                            ...props
                        }: C3AlertProps) => {
    let iconClass = 'primary'
    if (children != undefined) {
        text = children;
    }
    let variantClasses = ' ';
    for (const [key, value] of Object.entries(props)) {
        if (value) {
            iconClass = key;
            variantClasses += ` bbm-rcl-alert--${key}`;
        }
    }
    return (
        <div className={['bbm-rcl-alert', variantClasses, className, `bbm-rcl-alert--${size}`].join(' ')}>
            {
                icon == ' ' ?
                    <p>{text}</p>
                    :
                    <div className={'bbm-rcl-alert--icon-group'}>
                        <C3Icon className={`bbm-rcl-icon--${iconClass}`} icon={icon} size={size}></C3Icon>
                        <p>{text}</p>
                    </div>
            }

        </div>
    )
}